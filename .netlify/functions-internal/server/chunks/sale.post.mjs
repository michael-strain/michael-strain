import { defineEventHandler, readBody } from 'h3';
import braintree from 'braintree';

const sale_post = defineEventHandler(async (event) => {
  const merchantId = "dwt5hs5tpmvyy2vy";
  const publicKey = "p6c57mpq53sxvc88";
  const privateKey = "eb0903e8dbaaa945d611a39a62af6139";
  var nonce;
  var cartItems;
  var shippingInfo;
  var billingInfo;
  var userInfo;
  var orderId;
  var firebaseOrder;
  const body = await readBody(event);
  if (body.nonce) {
    nonce = body.nonce;
  }
  if (body.deviceData) {
    body.deviceData;
  }
  if (body.cart) {
    cartItems = body.cart;
  }
  if (body.shipping) {
    shippingInfo = body.shipping;
  }
  if (body.billing) {
    billingInfo = body.billing;
  }
  if (body.user) {
    userInfo = body.user;
  }
  if (body.orderId) {
    orderId = body.orderId;
  }
  if (body.firebaseOrder) {
    firebaseOrder = body.firebaseOrder;
  }
  let cartItemIds = [];
  let cartVariantIds = [];
  let cartVariants = [{}];
  for (let i = 0; i < cartItems.length; i++) {
    cartItemIds.push(await cartItems[i].id);
    for (let j = 0; j < cartItems[i].variants.length; j++) {
      if (cartItems[i].variants[j].inCart) {
        cartVariantIds.push(await cartItems[i].variants[j].id);
        cartVariants.push({
          id: cartItems[i].variants[j].id,
          cartQty: cartItems[i].variants[j].cartQty
        });
      }
    }
  }
  console.log(cartItemIds);
  let products = [];
  for (let i = 0; i < cartItemIds.length; i++) {
    let product = await $fetch("/api/queryItem?col=products&field=id&operator===&value=" + cartItemIds[i], { method: "GET" });
    products.push(await product[0]);
  }
  console.log(products);
  let totalCost = 0;
  let totalShippingAmount = 0;
  let lineItems = [];
  let printifyLines = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variants.length; j++) {
      let variant = products[i].variants[j];
      if (cartVariantIds.includes(variant.id)) {
        console.log("variant.id in cartVariantIds: " + variant.id);
        let thisItemPrice = Number(itemPrice(variant, shippingInfo.country));
        let thisShipCost = Number(itemShippingPrice(variant, shippingInfo.country));
        let thisItemQty = Number(cartVariants[cartVariants.map((x) => {
          return x.id;
        }).indexOf(variant.id)].cartQty);
        console.log("thisItemPrice: " + thisItemPrice);
        console.log("thisShipCost: " + thisShipCost);
        console.log("thisItemQty: " + thisItemQty);
        totalCost += (thisItemPrice + thisShipCost) * thisItemQty;
        totalShippingAmount += thisShipCost * thisItemQty;
        let lineItem = {
          name: products[i].variants[j].title,
          kind: "debit",
          quantity: thisItemQty,
          unitAmount: thisItemPrice + thisShipCost,
          totalAmount: (thisItemPrice + thisShipCost) * thisItemQty
        };
        let printifyLine = {
          product_id: products[i].id,
          variant_id: variant.id,
          quantity: thisItemQty
        };
        lineItems.push(lineItem);
        printifyLines.push(printifyLine);
      }
    }
  }
  totalCost = Math.ceil(totalCost) / 100;
  totalShippingAmount = Math.ceil(totalShippingAmount) / 100;
  console.log("totalCost: " + totalCost);
  console.log("totalShippingAmount: " + totalShippingAmount);
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId,
    publicKey,
    privateKey
  });
  console.log("Creating a transaction for amt: " + totalCost);
  let customer = {};
  if (!userInfo.inVault) {
    customer = {
      id: userInfo.uid,
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phone: userInfo.phone
    };
  }
  gateway.transaction.sale({
    amount: totalCost,
    paymentMethodNonce: nonce,
    billing: {
      countryCodeAlpha2: billingInfo.country,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      streetAddress: billingInfo.address,
      extendedAddress: billingInfo.address2,
      locality: billingInfo.city,
      region: billingInfo.region,
      postalCode: billingInfo.zip
    },
    orderId,
    shipping: {
      countryCodeAlpha2: shippingInfo.country,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      streetAddress: shippingInfo.address1,
      extendedAddress: shippingInfo.address2,
      locality: shippingInfo.city,
      region: shippingInfo.region,
      postalCode: shippingInfo.zip
    },
    shippingAmount: totalShippingAmount,
    customerId: userInfo.inVault ? userInfo.uid : null,
    customer: !userInfo.inVault ? customer : null,
    lineItems,
    options: {
      addBillingAddressToPaymentMethod: true,
      submitForSettlement: true,
      paypal: {
        description: "Payment for your Dope Order - ID: " + orderId
      },
      storeInVault: true,
      storeShippingAddressInVault: true,
      venmo: {
        profileId: "@SICoLLC"
      }
    }
  }, async (err, result) => {
    console.log(result);
    if (!result.success) {
      console.log(err);
    }
    if (result.success) {
      let firebaseBody = firebaseOrder;
      firebaseBody.paymentStatus = result.transaction.status, firebaseBody.status = result.success ? "PAID" : "PAYMENT_ISSUE", firebaseBody.paymentDate = result.success ? new Date() : "Not Paid";
      const firebase = await $fetch("/api/set?col=orders&docId=" + orderId, { method: "POST", body: firebaseBody });
      if (firebase.success) {
        const printifyOrder = {
          external_id: orderId,
          line_items: printifyLines,
          shipping_method: 1,
          send_shipping_notification: true,
          address_to: {
            first_name: userInfo.firstName,
            last_name: userInfo.lastName,
            email: userInfo.email,
            phone: userInfo.phone,
            country: shippingInfo.country,
            region: shippingInfo.region,
            address1: shippingInfo.address1,
            address2: shippingInfo.address2,
            city: shippingInfo.city,
            zip: shippingInfo.zip
          }
        };
        const printify = await $fetch("/api/printify/order", { method: "POST", body: printifyOrder });
        console.log("Printify response:");
        console.log(printify);
        let firebaseUpdateBody = firebaseBody;
        firebaseUpdateBody.paymentStatus = result.transaction.status;
        firebaseUpdateBody.status = "Ordered - or whatever printify result says";
        firebaseUpdateBody.paymentDate = result.success ? new Date() : "Not Paid";
        const firebaseUpdate = await $fetch("/api/set?col=orders&docId=" + orderId, { method: "POST", body: firebaseUpdateBody });
        console.log("Firebase Update: ");
        console.log(firebaseUpdate);
        return { success: true, result, firebaseResult: firebase, printifyResult: printify, firebaseUpdateResult: firebaseUpdate };
      }
    } else {
      console.log(err);
    }
  });
});
const itemShippingPrice = function(variant, shippingCountry) {
  let sProfile = false;
  for (let i = 0; i < variant.shippingProfile.length; i++) {
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      if (variant.shippingProfile[i].countries[j] == shippingCountry) {
        sProfile = variant.shippingProfile[i];
        variant.shipCost = sProfile.additional_items.cost;
        console.log("Shipping Cost: " + sProfile.additional_items.cost);
        return sProfile.additional_items.cost;
      }
    }
  }
  if (!sProfile) {
    for (let i = 0; variant.shippingProfile.length; i++) {
      for (let j = 0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i];
          variant.shipCost = sProfile.additional_items.cost;
          console.log("Shipping Cost: " + sProfile.additional_items.cost);
          return sProfile.additional_items.cost;
        }
      }
    }
  }
  return sProfile.additional_items.cost > 0 ? sProfile.additional_items.cost : 1e3;
};
const itemPrice = function(variant, shippingCountry) {
  let sProfile = false;
  var itemCost;
  for (let i = 0; i < variant.shippingProfile.length; i++) {
    let countryList = [];
    countryList = variant.shippingProfile[i].countries;
    for (let j = 0; j < countryList.length; j++) {
      if (countryList[j] == shippingCountry) {
        sProfile = variant.shippingProfile[i];
        itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
        console.log("Item Cost: " + itemCost);
        return itemCost;
      }
    }
  }
  if (!sProfile) {
    for (let i = 0; variant.shippingProfile.length; i++) {
      for (let j = 0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i];
          itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + variant.cost * 0.1 + 100);
          console.log("Item Cost: " + itemCost);
          return itemCost;
        }
      }
    }
  }
};

export { sale_post as default };
//# sourceMappingURL=sale.post.mjs.map

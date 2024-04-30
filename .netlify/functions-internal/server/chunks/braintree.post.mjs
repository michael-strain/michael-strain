import { defineEventHandler, readBody } from 'h3';
import braintree from 'braintree';

const braintree_post = defineEventHandler((event) => {
  const merchantId = "dwt5hs5tpmvyy2vy";
  const publicKey = "p6c57mpq53sxvc88";
  const privateKey = "eb0903e8dbaaa945d611a39a62af6139";
  var nonce;
  var deviceData;
  const body = readBody(event);
  if (body.nonce) {
    nonce = body.nonce;
  }
  if (body.deviceData) {
    deviceData = body.deviceData;
  }
  if (body.cart) {
    body.cart;
  }
  if (body.shipping) {
    body.shippingInfo;
  }
  console.log(body);
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId,
    publicKey,
    privateKey
  });
  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: nonce,
    deviceData,
    options: {
      submitForSettlement: true
    }
  }, (err, results) => {
    console.log("Results: " + results);
    console.log("Err: " + err);
  });
});

export { braintree_post as default };
//# sourceMappingURL=braintree.post.mjs.map

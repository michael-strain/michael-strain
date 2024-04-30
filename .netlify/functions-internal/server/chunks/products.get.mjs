import { defineEventHandler, getQuery } from 'h3';
import { b as queryByCollection, c as add } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const products_get = defineEventHandler(async (event) => {
  var requestCounter = 0;
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      requestCounter = 0;
    });
  }
  if (getQuery(event).id) {
    const query = getQuery(event);
    console.log("query.id:");
    console.log(query.id);
    const opts = {
      method: "GET",
      url: "/api/queryItem?col=products&field=id&operator===&value=" + query.id
    };
    var idResult;
    if (requestCounter < 400) {
      idResult = await $fetch(opts.url, { method: "GET" });
      requestCounter++;
    } else {
      await sleep(6e4);
      idResult = await $fetch(opts.url, { method: "GET" });
      requestCounter = 1;
    }
    console.log("idResult.id:");
    console.log(idResult.id);
    if (idResult.length < 1) {
      console.log("Product doesn't appear to be on Firebase - let's check directly with printify, then update firebase");
      const getProduct = await $fetch(`/api/printify/product?id=${query.id}`, { method: "GET" });
      if (getProduct.error) {
        console.log(getProduct.error);
        return getProduct.error;
      }
      return getProduct;
    } else {
      return idResult;
    }
  } else {
    const opts = {
      method: "GET",
      url: "https://api.printify.com/v1/shops/6483145/products.json",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
      }
    };
    if (requestCounter < 400) {
      await $fetch(opts.url, {
        method: "GET",
        headers: opts.headers
      });
      requestCounter++;
    } else {
      await sleep(6e4);
    }
    const docs = await queryByCollection("products");
    if (docs.length < products.length) {
      try {
        for (let i = 0; i < products.length; i++) {
          if (docs.find((product) => product.id === products[i].id)) {
            continue;
          } else {
            console.log("Found new product! " + products[i].id);
            let printProviderUrl = "https://api.printify.com/v1/catalog/blueprints/" + products[i].blueprint_id + "/print_providers/" + products[i].print_provider_id + "/shipping.json";
            if (requestCounter < 400) {
              let shipping2 = await $fetch(printProviderUrl, {
                method: "GET",
                headers: opts.headers
              });
              requestCounter++;
            } else {
              await sleep(6e4);
            }
            for (let k = 0; k < products[i].variants.length; k++) {
              let shippingProfile = 0;
              products[i].variants[k].shippingProfile = [];
              for (let j = 0; j < shipping.profiles.length; j++) {
                if (shipping.profiles[j].variant_ids.includes(products[i].variants[k].id)) {
                  products[i].variants[k].shippingProfile[shippingProfile] = shipping.profiles[j];
                  products[i].variants[k].handlingTime = shipping.handling_time.value;
                  products[i].variants[k].handlingTimeUnit = shipping.handling_time.unit;
                  shippingProfile++;
                }
              }
            }
            let docy = products[i];
            let docRef = await add("products", docy);
          }
        }
      } catch (error) {
        console.log(error);
        return { error: error.message };
      }
    }
    return { status: 200, body: products };
  }
});

export { products_get as default };
//# sourceMappingURL=products.get.mjs.map

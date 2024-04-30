import { defineEventHandler, getQuery } from 'h3';
import braintree from 'braintree';

const braintree_get = defineEventHandler(async (event) => {
  const merchantId = "dwt5hs5tpmvyy2vy";
  const publicKey = "p6c57mpq53sxvc88";
  const privateKey = "eb0903e8dbaaa945d611a39a62af6139";
  let uid = null;
  const query = getQuery(event);
  console.log(query);
  if (query.uid) {
    uid = query.uid;
  }
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId,
    publicKey,
    privateKey
  });
  gateway.clientToken.generate({
    customerId: uid ? uid : null
  }, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response.clientToken);
      const clientToken = response.clientToken;
      return clientToken;
    }
  });
});

export { braintree_get as default };
//# sourceMappingURL=braintree.get.mjs.map

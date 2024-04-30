import { defineEventHandler } from 'h3';
import braintree from 'braintree';

var clientToken = "";
const token = defineEventHandler((event) => {
  const merchantId = "dwt5hs5tpmvyy2vy";
  const publicKey = "p6c57mpq53sxvc88";
  const privateKey = "eb0903e8dbaaa945d611a39a62af6139";
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId,
    publicKey,
    privateKey
  });
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      console.log("Error Generating Client Token Dawg: " + err);
    }
    clientToken = response.clientToken;
    console.log("Generated Client Token :D");
  });
  return clientToken;
});

export { token as default };
//# sourceMappingURL=token.mjs.map

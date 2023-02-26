// import * as braintree from 'braintree-web-drop-in'
// import dropin from 'braintree-web-drop-in'
// (Suggested by CoPilot)

// import braintree from 'braintree-web'
import braintree from 'braintree' // This one worked, not sure why i'm trying to import from braintree-web
import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {

  //Merchant ID
  const merchantId = 'dwt5hs5tpmvyy2vy'
  //Public Key
  const publicKey = 'p6c57mpq53sxvc88'
  //Private Key
  const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  let uid = null

  const query = getQuery(event)
  console.log(query)
  if (query.uid) {
    uid = query.uid
  }

  // Create a Braintree Gateway
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: merchantId,
    publicKey: publicKey,
    privateKey: privateKey
  })

  // Create a client token
  gateway.clientToken.generate({
    customerId: uid ? uid : null
  }, (err, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log(response.clientToken)
      const clientToken = response.clientToken
      return clientToken
      // Looks like we are successfully getting a client token :D
    }
  })
})
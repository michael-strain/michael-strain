// import * as braintree from 'braintree-web-drop-in'
// import dropin from 'braintree-web-drop-in'

//Not sure how to get our gateway or braintree here
// const gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: 'dwt5hs5tpmvyy2vy',
//   publicKey: 'p6c57mpq53sxvc88',
//   privateKey: 'eb0903e8dbaaa945d611a39a62af6139'
// })
// (Suggested by CoPilot)

// import braintree from 'braintree-web-drop-in'
import braintree from 'braintree'
import { getQuery } from 'h3'
import { getAuth } from 'firebase/auth'

var clientToken = ''

export default defineEventHandler((event) => {

  //Merchant ID
  const merchantId = 'dwt5hs5tpmvyy2vy'
  //Public Key
  const publicKey = 'p6c57mpq53sxvc88'
  //Private Key
  const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: merchantId,
    publicKey: publicKey,
    privateKey: privateKey
  })

  gateway.clientToken.generate({
    // customerId: uid
  }, (err, response) => {
    if (err) {
      console.log("Error Generating Client Token Dawg: " + err)
    }
    // console.log(response.clientToken)
    // console.log("You generated a clientToken! " + response.clientToken)
    clientToken = response.clientToken
    console.log("Generated Client Token :D")
  })

  // console.log(clientToken)

  return clientToken

  
  // //Merchant ID
  // const merchantId = 'dwt5hs5tpmvyy2vy'
  // //Public Key
  // const publicKey = 'p6c57mpq53sxvc88'
  // //Private Key
  // const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  // // const paypalSandboxEmail = 'sb-47zpsz24766859@business.example.com'
  // // const paypalClientId='AVFFiCJagupK5zYAAlvkCtpyXpEK4eDhOl3ah-pkL1eka4gjn6zvYKI1Y5tLlH6YaSXzezUjKRi8CC9k'
  // // const paypalClientSecret='EH1B43esDte2Tn1y50_pF6fgz_RRlVgq-a2F6KJMrJnBD0f3P2T7n-ISruqv33NBURigjLbW2rMEIH1Y'

  // // const query = getQuery(event)
  // // if (query.uid) {
  // //   const uid = query.uid
  // // } else {
  // //   const uid = 'guest-user'
  // // }

  // // const uid = 'guest-user'

  // // Create a Braintree Gateway
  // const gateway = new braintree.BraintreeGateway({
  //   environment: braintree.Environment.Sandbox,
  //   merchantId: merchantId,
  //   publicKey: publicKey,
  //   privateKey: privateKey
  // })

  // // Create a client token
  // return gateway.clientToken.generate({
  //   // customerId: uid
  // }, (err, response) => {
  //   if (err) {
  //     console.log("Error Generating Client Token Dawg: " + err)
  //   } else {
  //     // console.log(response.clientToken)
  //     const clientToken = response.clientToken
  //     console.log("You generated a clientToken! " + response.clientToken)
  //     return response.clientToken
  //     // Looks like we are successfully getting a client token :D
  //   }
  // })
})
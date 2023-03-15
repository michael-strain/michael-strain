//This function should only retrieve 1 order, by ID, directly from printify
//We should then update the order Object with any relevant info from our end, which may or may not involve more queries,
//Then we should ensure that the order exists in our DB (and maybe we should update the DB order with any relevant changes, or maybe we hook into Printify events or something?)

import { getQuery } from 'h3'
import { config } from 'process'

export default defineEventHandler(async (event) => {

  const query = getQuery(event)
  if(query){
    console.log(query)
    return query
  }
  const runtimeConfig = useRuntimeConfig()

  const opts = {
    method: 'GET',
    url: `https://api.printify.com/v1/shops/6483145/orders/${query.id}.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': runtimeConfig.PRINTIFY_API_KEY
    }
  }

  const result = await $fetch(opts.url, {method: 'GET', headers: opts.headers })

  
  return result
})
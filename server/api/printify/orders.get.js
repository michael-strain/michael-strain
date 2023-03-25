//Need to incorporate pagination (page and limit query events)
//We can also implement status-based filtering

export default defineEventHandler(async (event) => {

  const runtimeConfig = useRuntimeConfig()

  const opts = {
    method: 'GET',
    url: `https://api.printify.com/v1/shops/6483145/orders.json`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': runtimeConfig.PRINTIFY_API_KEY,
    }
  }

  const result = await $fetch(opts.url, {method: 'GET', headers: opts.headers })

  
  return result
})
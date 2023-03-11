//Admins should be able to get all orders, and they should be filterable and paginated and all that good data management best practice shit

import { getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  if(query){
    console.log(query)
    return query
  }
  return {error: "I'm still under construction, sorry"}
})
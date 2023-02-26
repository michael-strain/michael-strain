// Fetch an item by its ID from the database

// Path: server/api/queryItem.get.ts


// We could theoretically use this call to populate the product [id].vue pages
// We could also use this call to populate the cart page - but we may prefer to use localStorage instead until a checkout happens in order to save on calls to the DB



// //Original code to query whole collection
// import { getQuery } from "h3"
// import { queryByCollection } from "../lib/firestore"

// export default defineEventHandler(async (event) => {
//   try {
//     const query = getQuery(event)
//     const docs = await queryByCollection(query.col as string)
//     return docs
//   } catch (error) {
//     return { result: [], error: error.message }
//   }
// })

// Use the queryCollectionWhere function to query a collection by a field
import { WhereFilterOp } from "@firebase/firestore"
import { getQuery } from "h3"
import { queryCollectionWhere } from "../lib/firestore"

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const docs = await queryCollectionWhere(query.col as string, query.field as string, query.operator as WhereFilterOp, query.value as string)
    return docs
  } catch (error) {
    return { result: [], error: error.message }
  }
})
// Fetch an item by its ID from the database

// Path: server/api/queryItem.get.ts


// We could theoretically use this call to populate the product [id].vue pages
// We could also use this call to populate the cart page - but we may prefer to use localStorage instead until a checkout happens in order to save on calls to the DB


// Use the queryCollectionWhere function to query a collection by a field
// import { WhereFilterOp } from "@firebase/firestore"
// import { contains } from "@firebase/util"
import { getQuery, readBody } from "h3"
import { queryCollectionWhere } from "../lib/firestore"

export default defineEventHandler(async (event) => {
  try {

    // const body = await readBody(event)

    const query = getQuery(event)
    //Query.operator should be of type WhereFilterOp:
    // WhereFilterOp - All options are strings
    // <
    // <=
    // ==
    // !=
    // >=
    // >
    // array-contains
    // in
    // array-contains-any
    // not-in

    //Currently not using body, only using query, let's see if it works with all the weird stuff I'm passing

    const docs = await queryCollectionWhere(query.col, query.field, query.operator, query.value)
    return docs
  } catch (error) {
    return { error: error.message }
  }
})
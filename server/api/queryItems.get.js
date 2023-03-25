// Fetch an item by its ID from the database

//I THINK WE HAVE A MAX OF 10 ITEMS RETURNED BY THIS FUNCTION

// Path: server/api/queryItem.get.ts


// We could theoretically use this call to populate the product [id].vue pages
// We could also use this call to populate the cart page - but we may prefer to use localStorage instead until a checkout happens in order to save on calls to the DB


// Use the queryCollectionWhere function to query a collection by a field
// import { WhereFilterOp } from "@firebase/firestore"
// import { contains } from "@firebase/util"
import { getQuery } from "h3"
import { queryCollectionWhereIn } from "../lib/firestore"

export default defineEventHandler(async (event) => {
  try {

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

    const docs = await queryCollectionWhereIn(query.col, query.field, query.value)
    console.log("Searching " + query.col + " where " + query.field + " in " + query.value)
    
    console.log("docs: ")
    console.log(docs)
    return docs
  } catch (error) {
    return { error: error.message }
  }
})
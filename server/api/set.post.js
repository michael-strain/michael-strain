// import { getDoc } from "@firebase/firestore";
import { getQuery, readBody } from "h3"
import { queryCollectionWhere, set } from "../lib/firestore"

//We need to be really careful here, this call could currently update anything in our DB where a user produces an appropriate id and collection name

export default defineEventHandler(async (event)=>{
  try{
    const query = getQuery(event);
    const body = await readBody(event);
    const docId = query.docId

    console.log("docId: " + docId)

    
    //Get original doc reference by ID using query.docId
    const docRef = await $fetch('/api/queryItem?col=' + query.col + '&field=id&operator===&value=' + docId, {method: 'GET' });
    console.log("docRef: ")
    console.log(docRef[0])
    // const querySnapshot = getDoc(docRef)
    // console.log("querySnapshot: " + querySnapshot)

    // querySnapshot.data().status = query.status

    // var newStatusSnapshot = querySnapshot.data()
    // console.log("Old data: " + newStatusSnapshot)
    // docRef.status = query.status //idk how to update the fuckin status
    
    // console.log(docRef)

    // //Update the docRef using body
    // docRef.update({status: query.status})
  

    const setter = await set(query.col, docId, body);
    console.log("setter: ")
    console.log(setter)
    return { result: setter };
  } catch (error) {
    console.log(error)
    return { error: error.message }
  }
});
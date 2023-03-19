import { getDoc } from "@firebase/firestore";
import { getQuery, readBody } from "h3"
import { queryCollectionWhere, set } from "../lib/firestore"

export default defineEventHandler(async (event)=>{
  try{
    const query = getQuery(event);
    const body = await readBody(event);

    
    //Get original doc reference by ID using query.docId
    const docRef = queryCollectionWhere(query.col, "id", "==", query.docId);
    const querySnapshot= await getDoc(docRef)

    const opts= {

    }
    
    // querySnapshot.data().status = query.status

    var newStatusSnapshot = querySnapshot.data()
    newStatusSnapshot.status = query.status
    // docRef.status = query.status //idk how to update the fuckin status
    
    // console.log(docRef)

    // //Update the docRef using body
    // docRef.update({status: query.status})
  

    const setter = await set(query.col, query.docId, newStatusSnapshot);
    return { result: setter };
  } catch (error) {
    console.log(error)
    return { error: error.message }
  }
});
import { getQuery, readBody } from "h3"
import { set } from "../lib/firestore"

export default defineEventHandler(async (event)=>{
  try{
    const query = getQuery(event);
    const body = await readBody(event);
    const docRef = await set(query.col, body);
    return { result: docRef };
  } catch (error) {
    console.log(error)
    return { error: error.message }
  }
});
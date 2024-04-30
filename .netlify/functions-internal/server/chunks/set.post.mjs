import { defineEventHandler, getQuery, readBody } from 'h3';
import { s as set, q as queryCollectionWhere } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const set_post = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const body = await readBody(event);
    const docId = query.docId;
    console.log("docId: " + docId);
    await set("orders", docId, body);
    console.log("Updated order with new body");
    const result = await queryCollectionWhere("orders", "id", "==", docId);
    console.log("resulting firebase order doc: ");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});

export { set_post as default };
//# sourceMappingURL=set.post.mjs.map

import { defineEventHandler, getQuery } from 'h3';
import { a as queryCollectionWhereIn } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const queryItems_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const docs = await queryCollectionWhereIn(query.col, query.field, query.value);
    console.log("Searching " + query.col + " where " + query.field + " in " + query.value);
    console.log("docs: ");
    console.log(docs);
    return docs;
  } catch (error) {
    return { error: error.message };
  }
});

export { queryItems_get as default };
//# sourceMappingURL=queryItems.get.mjs.map

import { defineEventHandler, getQuery } from 'h3';
import { q as queryCollectionWhere } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const queryItem_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const docs = await queryCollectionWhere(query.col, query.field, query.operator, query.value);
    console.log("Searching " + query.col + " where " + query.field + " " + query.operator + " " + query.value);
    return docs;
  } catch (error) {
    return { error: error.message };
  }
});

export { queryItem_get as default };
//# sourceMappingURL=queryItem.get.mjs.map

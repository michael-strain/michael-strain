import { defineEventHandler, getQuery } from 'h3';
import { b as queryByCollection } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const query_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const docs = await queryByCollection(query.col);
    return docs;
  } catch (error) {
    return { result: [], error: error.message };
  }
});

export { query_get as default };
//# sourceMappingURL=query.get.mjs.map

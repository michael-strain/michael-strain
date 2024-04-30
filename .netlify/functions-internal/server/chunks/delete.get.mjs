import { defineEventHandler, getQuery } from 'h3';
import { d as del } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const delete_get = defineEventHandler(async (event) => {
  try {
    const { col, id } = getQuery(event);
    await del(col, id);
    return { result: id };
  } catch (error) {
    return { error: error.message };
  }
});

export { delete_get as default };
//# sourceMappingURL=delete.get.mjs.map

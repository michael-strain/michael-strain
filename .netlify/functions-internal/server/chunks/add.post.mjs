import { defineEventHandler, getQuery, readBody } from 'h3';
import { c as add } from './firestore.mjs';
import 'firebase/firestore';
import 'firebase/app';

const add_post = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const body = await readBody(event);
    const docRef = await add(query.col, body);
    return { result: docRef };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
});

export { add_post as default };
//# sourceMappingURL=add.post.mjs.map

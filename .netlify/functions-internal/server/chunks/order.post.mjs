import { defineEventHandler, readBody } from 'h3';
import { u as useRuntimeConfig } from './netlify.mjs';
import 'node-fetch-native/polyfill';
import 'ufo';
import 'ofetch';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'defu';
import 'radix3';

const order_post = defineEventHandler(async (event) => {
  const body = readBody(event);
  const runtimeConfig = useRuntimeConfig();
  const opts = {
    method: "POST",
    url: `https://api.printify.com/v1/shops/6483145/orders.json`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": runtimeConfig.PRINTIFY_API_KEY
    },
    body
  };
  const result = await $fetch(opts.url, { method: "GET", headers: opts.headers });
  return result;
});

export { order_post as default };
//# sourceMappingURL=order.post.mjs.map

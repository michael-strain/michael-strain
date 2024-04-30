import { defineEventHandler, getQuery } from 'h3';
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

const order_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (query) {
    console.log(query);
  } else {
    return { error: "No Order ID Provided" };
  }
  const runtimeConfig = useRuntimeConfig();
  const opts = {
    method: "GET",
    url: `https://api.printify.com/v1/shops/6483145/orders/${query.id}.json`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": runtimeConfig.PRINTIFY_API_KEY
    }
  };
  const result = await $fetch(opts.url, { method: "GET", headers: opts.headers });
  return result;
});

export { order_get as default };
//# sourceMappingURL=order.get.mjs.map

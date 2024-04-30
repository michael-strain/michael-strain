import { defineEventHandler } from 'h3';
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

const orders_get = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const opts = {
    method: "GET",
    url: `https://api.printify.com/v1/shops/6483145/orders.json`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": runtimeConfig.PRINTIFY_API_KEY
    }
  };
  const result = await $fetch(opts.url, { method: "GET", headers: opts.headers });
  return result;
});

export { orders_get as default };
//# sourceMappingURL=orders.get.mjs.map

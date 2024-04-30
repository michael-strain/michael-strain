globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, getQuery } from 'h3';
import { defineStore, skipHydrate, acceptHMRUpdate } from 'pinia/dist/pinia';
import { useLocalStorage } from '@vueuse/core';

const useRawBlueprintDataStore = defineStore("rawBlueprintData", () => {
  const rawBlueprintData = useLocalStorage("rawBlueprintData", []);
  return { rawBlueprintData: skipHydrate(rawBlueprintData) };
});
if (globalThis._importMeta_.hot) {
  globalThis._importMeta_.hot.accept(acceptHMRUpdate(useRawBlueprintDataStore, globalThis._importMeta_.hot));
}

const blueprints_get = defineEventHandler(async (event) => {
  let requestCounter = 0;
  const opts = {
    method: "GET",
    url: "https://api.printify.com/v1/catalog/blueprints.json",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
    }
  };
  const query = getQuery(event);
  console.log(query);
  if (query.id) {
    const blueprint = await getBlueprintIdData(query.id);
    const printProviders = await getPrintProviderData(blueprint.id);
    for (let j = 0; j < printProviders.length; j++) {
      let variants = await getVariantData(blueprint.id, printProviders[j].id);
      let updatedVariants = [];
      let shippingProfiles = await getShippingData(blueprint.id, printProviders[j].id);
      for (let k = 0; k < variants.length; k++) {
        updatedVariants[k] = await setVariantData(variants[k], shippingProfiles, printProviders[j]);
      }
      blueprint.variants = updatedVariants;
    }
    console.log("Fetched all blueprint info for id: " + blueprint.id);
    return blueprint;
  } else {
    let page = 1;
    let limit = 1;
    if (query.page) {
      page = query.page;
    }
    if (query.limit) {
      limit = query.limit;
    }
    const blueprints = await getBlueprints(page, limit);
    console.log("Blueprints complete");
    return blueprints;
  }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
      requestCounter = 0;
    });
  }
  async function getBlueprintIdData(id) {
    const opts2 = {
      method: "GET",
      url: `https://api.printify.com/v1/catalog/blueprints/${id}.json`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q"
      }
    };
    let blueprintData = await $fetch(opts2.url, {
      method: "GET",
      headers: opts2.headers
    });
    return blueprintData;
  }
  async function getBlueprintData() {
    const store = useRawBlueprintDataStore();
    if (store.rawBlueprintData.length > 0) {
      console.log("Using stored raw blueprint data");
      return store.rawBlueprintData;
    } else {
      console.log("Fetching raw blueprint data from Printify");
      requestCounter < 400 ? requestCounter++ : await sleep(6e4);
      let blueprintData = await $fetch(opts.url, {
        method: "GET",
        headers: opts.headers
      });
      store.$patch({ rawBlueprintData: blueprintData });
      return blueprintData;
    }
  }
  async function getPrintProviderData(blueprintId) {
    let printProviderUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprintId + "/print_providers.json";
    requestCounter < 400 ? requestCounter++ : await sleep(6e4);
    let printProviderData = await $fetch(printProviderUrl, {
      method: "GET",
      headers: opts.headers
    });
    return printProviderData;
  }
  async function getVariantData(blueprintId, printProviderId) {
    let variantUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprintId + "/print_providers/" + printProviderId + "/variants.json";
    requestCounter < 400 ? requestCounter++ : await sleep(6e4);
    let variantData = await $fetch(variantUrl, {
      method: "GET",
      headers: opts.headers
    });
    let variants = await variantData.variants;
    return variants;
  }
  async function getShippingData(blueprintId, printProviderId) {
    let shippingUrl = "https://api.printify.com/v1/catalog/blueprints/" + blueprintId + "/print_providers/" + printProviderId + "/shipping.json";
    requestCounter < 400 ? requestCounter++ : await sleep(6e4);
    let shippingData = await $fetch(shippingUrl, {
      method: "GET",
      headers: opts.headers
    });
    return shippingData;
  }
  function setVariantData(variant, shippingProfiles, printProvider) {
    variant.shippingProfiles = [];
    variant.printProvider = printProvider;
    for (let j = 0; j < shippingProfiles.profiles.length; j++) {
      for (let k = 0; k < shippingProfiles.profiles[j].variant_ids.length; k++) {
        if (shippingProfiles.profiles[j].variant_ids[k] == variant.id) {
          variant.shippingProfiles.push(shippingProfiles.profiles[j]);
        }
      }
    }
    return variant;
  }
  async function getBlueprints(page, limit) {
    let bpFinal = [];
    const raw = useRawBlueprintDataStore();
    let blueprintData = [];
    if (raw.rawBlueprintData.length > 0) {
      blueprintData = raw.rawBlueprintData;
    } else {
      blueprintData = await getBlueprintData();
    }
    const prevRange = (page - 1) * limit;
    const nextRange = page * limit;
    for (let i = prevRange; i < nextRange; i++) {
      bpFinal[i] = blueprintData[i];
      let printProviders = await getPrintProviderData(blueprintData[i].id);
      for (let j = 0; j < printProviders.length; j++) {
        let variants = await getVariantData(blueprintData[i].id, printProviders[j].id);
        let updatedVariants = [];
        let shippingProfiles = await getShippingData(blueprintData[i].id, printProviders[j].id);
        for (let k = 0; k < variants.length; k++) {
          updatedVariants[k] = await setVariantData(variants[k], shippingProfiles, printProviders[j]);
        }
        bpFinal[i].variants = updatedVariants;
      }
    }
    return bpFinal;
  }
});

export { blueprints_get as default };
//# sourceMappingURL=blueprints.get.mjs.map

import { d as defineStore, s as skipHydrate } from './server.mjs';
import { u as useLocalStorage } from './index.a7d16411.mjs';

const useProductDataStore = defineStore("productData", () => {
  const productData = useLocalStorage("productData", []);
  return { productData: skipHydrate(productData) };
});

export { useProductDataStore as u };
//# sourceMappingURL=productData.7d836a64.mjs.map

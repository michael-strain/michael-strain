import { d as defineStore, s as skipHydrate } from './server.mjs';
import { u as useLocalStorage } from './index.a7d16411.mjs';

const useOrderDataStore = defineStore("orderData", () => {
  const orderData = useLocalStorage("orderData", []);
  return { orderData: skipHydrate(orderData) };
});

export { useOrderDataStore as u };
//# sourceMappingURL=orderData.d1183d9d.mjs.map

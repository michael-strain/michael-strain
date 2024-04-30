import { d as defineStore, s as skipHydrate } from './server.mjs';
import { u as useLocalStorage } from './index.a7d16411.mjs';

const useCartDataStore = defineStore("cartData", () => {
  const cartData = useLocalStorage("cartData", []);
  return { cartData: skipHydrate(cartData) };
});

export { useCartDataStore as u };
//# sourceMappingURL=cartData.947fcc28.mjs.map

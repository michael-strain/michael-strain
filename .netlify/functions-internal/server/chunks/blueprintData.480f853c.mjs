import { d as defineStore, s as skipHydrate } from './server.mjs';
import { u as useLocalStorage } from './index.a7d16411.mjs';

const useBlueprintDataStore = defineStore("blueprintData", () => {
  const blueprintData = useLocalStorage("blueprintData", []);
  return { blueprintData: skipHydrate(blueprintData) };
});

export { useBlueprintDataStore as u };
//# sourceMappingURL=blueprintData.480f853c.mjs.map

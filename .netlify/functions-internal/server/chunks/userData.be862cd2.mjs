import { d as defineStore, s as skipHydrate } from './server.mjs';
import { u as useLocalStorage } from './index.a7d16411.mjs';

const useUserDataStore = defineStore("userData", () => {
  const userData = useLocalStorage(
    "userData",
    {
      shippingInfo: {
        country: "US"
      },
      billingInfo: {},
      cartInfo: {},
      userInfo: { inVault: false }
    }
  );
  return { userData: skipHydrate(userData) };
});

export { useUserDataStore as u };
//# sourceMappingURL=userData.be862cd2.mjs.map

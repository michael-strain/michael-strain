import { a as useRouter$1 } from './server.mjs';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk",
  authDomain: "michael-strain.firebaseapp.com",
  projectId: "michael-strain",
  storageBucket: "michael-strain.appspot.com",
  messagingSenderId: "115270127034",
  appId: "1:115270127034:web:f010d12fd090dbe094a183",
  measurementId: "G-LTJZ9LS8MN"
};
initializeApp(firebaseConfig);
const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  const router = useRouter$1();
  router.push("/");
  return result;
};

export { signOutUser as s };
//# sourceMappingURL=firebase.9a3b2c60.mjs.map

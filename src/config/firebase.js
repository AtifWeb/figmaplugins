import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDtP6CEZd3Ab-h2kTsjSbDOAbTxzAnYias",
  authDomain: "howtoconfig-4a24e.firebaseapp.com",
  projectId: "howtoconfig-4a24e",
  storageBucket: "howtoconfig-4a24e.appspot.com",
  messagingSenderId: "676163480366",
  appId: "1:676163480366:web:75fd8cb754260056a828bf",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export { firebaseapp };

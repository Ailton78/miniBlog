import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJMJYuF4nkq2kntuZrwBWAnhW0L0F_iY0",
  authDomain: "miniblog-19c64.firebaseapp.com",
  projectId: "miniblog-19c64",
  storageBucket: "miniblog-19c64.appspot.com",
  messagingSenderId: "1090993584803",
  appId: "1:1090993584803:web:dbb8b06130e047ca6a1d16",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

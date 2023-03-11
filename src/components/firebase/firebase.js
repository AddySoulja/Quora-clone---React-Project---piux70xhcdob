import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBweBCUXMlfS9vjjaHRIe2LFscwedszdQM",
  authDomain: "quora-clone-by-aditya-kumar.firebaseapp.com",
  projectId: "quora-clone-by-aditya-kumar",
  storageBucket: "quora-clone-by-aditya-kumar.appspot.com",
  messagingSenderId: "802022759970",
  appId: "1:802022759970:web:fa93a0837c30efee1eb47b",
  measurementId: "G-2YCQJQP7VV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

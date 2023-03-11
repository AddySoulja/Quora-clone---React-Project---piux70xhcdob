import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from "firebase/auth";
import { auth } from "../firebase";

export const SignUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const LogIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const LogOut = async () => {
  await signOutFirebase(auth);
};

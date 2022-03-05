import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (name, data) => {
  const docRef = addDoc(collection(db, name), {
    ...data,
    createAt: serverTimestamp(),
  });
};

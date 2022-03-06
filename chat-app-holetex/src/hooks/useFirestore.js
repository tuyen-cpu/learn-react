import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
const useFirestore = (collect, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let citiesRef = query(collection(db, collect), orderBy("createdAt"));

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      citiesRef = query(
        citiesRef,
        where(condition.fieldName, condition.operation, condition.compareValue)
      );
    }

    const unsubscribe = onSnapshot(citiesRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });
    return unsubscribe;
  }, [collect, condition]);
  return documents;
};
export default useFirestore;

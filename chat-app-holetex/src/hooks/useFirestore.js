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
    let citiesRef = collection(db, collect);
    let q;
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      q = query(
        citiesRef,
        orderBy("createAt"),
        where(condition.fieldName, condition.operation, condition.compareValue)
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
      console.dir({ documents, snapshot, docs: snapshot.docs });
      return unsubscribe;
    });
  }, [collect, condition]);
  return documents;
};
export default useFirestore;

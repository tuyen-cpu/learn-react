import React, { createContext, useContext, useMemo } from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthConext } from "./AuthProvider";

export const AppContext = createContext();
export default function AppProvider({ children }) {
  // {
  //name:'room name'
  // description:'mota',
  //members:[uid1,uid2]
  //}
  const {
    user: { uid },
  } = useContext(AuthConext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operation: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFirestore("rooms", roomsCondition);

  return (
    <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
  );
}

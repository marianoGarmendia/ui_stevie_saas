import { createContext, useContext } from "react";

export const userContext = createContext();

export function useUser() {
  const userContextValues = useContext(userContext);
  return userContextValues;
}

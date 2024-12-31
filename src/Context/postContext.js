import { createContext, useContext } from "react";

export const postContext = createContext();

export function usePost() {
  const postContextValues = useContext(postContext);
  return postContextValues;
}

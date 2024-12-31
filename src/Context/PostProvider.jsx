import { useState } from "react";
import { postContext } from "./postContext";

// eslint-disable-next-line react/prop-types
export function PostProvider({ children }) {
  const [post, setPosts] = useState([]);

  return (
    <postContext.Provider value={{ post, setPosts }}>
      {children}
    </postContext.Provider>
  );
}

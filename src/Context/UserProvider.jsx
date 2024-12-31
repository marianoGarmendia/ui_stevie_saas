import { useState, useEffect } from "react";
import { userContext } from "./userContext";

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
}

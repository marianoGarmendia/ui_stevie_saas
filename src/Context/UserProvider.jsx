import { useState, useEffect } from "react";
import { userContext } from "./userContext";

const BACKEND_URL = import.meta.env.VITE_BACKEND_AUTH_URL;
// const api_url_dev = "http://localhost:5000";

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setUser(JSON.parse(user));
  //   }
  // }, []);

  // Al recargar la página verifico si hay un usuario con sesion mediante el envío de las cookies
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BACKEND_URL}/users/verifyUser`, {
          credentials: "include",
        });
        const userRes = await response.json();

        const { userFound } = userRes;
        console.log("UserProvider verifyUser");
        console.log(userFound);

        setUser(userFound);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <userContext.Provider value={{ user, loading, setUser }}>
      {children}
    </userContext.Provider>
  );
}

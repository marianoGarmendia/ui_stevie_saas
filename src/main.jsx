import ReactDOM from "react-dom/client";
import PostProvider from "./Context/PostProvider";
import { UserProvider } from "./Context/UserProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PostProvider>
      <App />
    </PostProvider>
  </UserProvider>
);

import ReactDOM from "react-dom/client";
import PostProvider from "./Context/PostProvider";
import { UserProvider } from "./Context/UserProvider";
import VoiceProvider  from "./Context/VoiceProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PostProvider>
      <VoiceProvider>
      <App />
      </VoiceProvider>
    </PostProvider>
  </UserProvider>
);

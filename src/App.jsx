import { Route, Routes, HashRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import CreatePodcast from "./pages/CreatePodcast";
import Calendar from "./pages/Calendar";
import PostsGeneration from "./pages/PostsGeneration";
import MediaGeneration from "./pages/MediaGeneration";
import MyMedia from "./pages/MyMedia";
import MyPosts from "./pages/MyPosts";
import Integrations from "./pages/Integrations";
import VirtualAgent from "./pages/VirtualAgent";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen bg-background text-foreground">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-auto p-6">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route
                      path="/posts-generation"
                      element={<PostsGeneration />}
                    />
                    <Route
                      path="/media-generation"
                      element={<MediaGeneration />}
                    />
                    <Route path="/my-media" element={<MyMedia />} />
                    <Route path="/my-posts" element={<MyPosts />} />
                    <Route path="/integrations" element={<Integrations />} />
                    <Route path="/virtual-agent" element={<VirtualAgent />} />
                    <Route path="/create-podcast" element={<CreatePodcast />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

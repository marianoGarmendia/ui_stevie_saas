import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import CreateContent from "./pages/CreateContent";
import LandingPage from "./pages/LandingPage";
import CreatePodcast from "./pages/CreatePodcast";

import PostsGeneration from "./pages/PostsGeneration";
import CompanyContext from "./pages/CompanyContext";
import MediaGeneration from "./pages/MediaGeneration";
import MyMedia from "./pages/MyMedia";
import MyPosts from "./pages/MyPosts";
import Integrations from "./pages/Integrations";
import VirtualAgent from "./pages/VirtualAgent";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Services from "./pages/Services";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedPage />}>
            <Route
              path="/*"
              element={
                <div className="flex h-screen bg-background text-foreground">
                  <Sidebar />
                  <div className="flex-1 flex flex-col">
                    <Header />
                    <main className="flex-1 overflow-auto p-6">
                      <Routes>
                        <Route path="/services" element={<Services />} />
                        <Route
                          path="/create-content"
                          element={<CreateContent />}
                        />
                        <Route
                          path="/posts-generation"
                          element={<PostsGeneration />}
                        />
                        <Route
                          path="/media-generation"
                          element={<MediaGeneration />}
                        />
                        <Route
                          path="/company-context"
                          element={<CompanyContext />}
                        />
                        <Route path="/my-media" element={<MyMedia />} />
                        <Route path="/my-posts" element={<MyPosts />} />
                        <Route
                          path="/integrations"
                          element={<Integrations />}
                        />
                        <Route
                          path="/virtual-agent"
                          element={<VirtualAgent />}
                        />
                        <Route
                          path="/create-podcast"
                          element={<CreatePodcast />}
                        />
                      </Routes>
                    </main>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

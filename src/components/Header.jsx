import { Button } from "./ui/button";
import { MoonIcon, SunIcon, VideoIcon, LogOutIcon } from "lucide-react";
import { UseTheme } from "./theme-provider";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { theme, setTheme } = UseTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <header className="border-b px-6 py-3 flex items-center justify-between bg-background">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          LaCalle AI
        </Button>
        <Button variant="outline" size="sm">
          OpenAi
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <VideoIcon className="w-4 h-4 mr-2" />
          Video Tutorial
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )}
        </Button>
        <Button variant="ghost" size="sm">
          🇺🇸 EN
        </Button>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOutIcon className="w-4 h-4 mr-2" />
          Logout
        </Button>
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </header>
  );
}

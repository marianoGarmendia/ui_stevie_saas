import { Button } from "./ui/button";
import { MoonIcon, SunIcon, VideoIcon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          Stevie AI
        </Button>
        <Button variant="outline" size="sm">
          Model gpt-4o
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <VideoIcon className="w-4 h-4 mr-2" />
          Video Tutorial
        </Button>
        <Button variant="ghost" size="icon">
          <MoonIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          🇺🇸 EN
        </Button>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>
    </header>
  );
}

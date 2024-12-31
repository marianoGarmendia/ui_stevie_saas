import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  HomeIcon,
  CalendarIcon,
  ImageIcon,
  FileTextIcon,
  FolderIcon,
  ShareIcon,
  PuzzleIcon,
  BotIcon as RobotIcon,
  MicIcon,
} from "lucide-react";

export function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 border-r bg-background p-4 flex flex-col">
      <nav className="space-y-2">
        <Link to="/home">
          <Button
            variant={isActive("/") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>
        <Link to="/calendar">
          <Button
            variant={isActive("/calendar") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </Button>
        </Link>
        <Link to="/posts-generation">
          <Button
            variant={isActive("/posts-generation") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            Posts Generation
          </Button>
        </Link>
        <Link to="/media-generation">
          <Button
            variant={isActive("/media-generation") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Media Generation
          </Button>
        </Link>
        <Link to="/my-media">
          <Button
            variant={isActive("/my-media") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <FolderIcon className="mr-2 h-4 w-4" />
            My Media
          </Button>
        </Link>
        <Link to="/my-posts">
          <Button
            variant={isActive("/my-posts") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <FileTextIcon className="mr-2 h-4 w-4" />
            My Posts
          </Button>
        </Link>
        <Link to="/integrations">
          <Button
            variant={isActive("/integrations") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <PuzzleIcon className="mr-2 h-4 w-4" />
            Integrations
          </Button>
        </Link>
        <Link to="/virtual-agent">
          <Button
            variant={isActive("/virtual-agent") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <RobotIcon className="mr-2 h-4 w-4" />
            Virtual Agent
          </Button>
        </Link>
        <Link to="/create-podcast">
          <Button
            variant={isActive("/create-podcast") ? "default" : "ghost"}
            className="w-full justify-start"
          >
            <MicIcon className="mr-2 h-4 w-4" />
            Create Podcast
          </Button>
        </Link>
      </nav>
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start">
          <ShareIcon className="mr-2 h-4 w-4" />
          Refer & Earn
        </Button>
      </div>
    </div>
  );
}

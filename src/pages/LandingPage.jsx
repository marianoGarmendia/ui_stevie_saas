import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import stevie_logo from "../../assets/stevie-ai-agency_2.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="mb-8">
        {/* Replace with your actual Stevie logo */}
        <img src={stevie_logo} alt="Stevie Logo" className="w-64" />
      </div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Stevie</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}

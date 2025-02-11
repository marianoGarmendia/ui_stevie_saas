import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import lacalle_logo from "../../assets/logo-lacalle.webp";

export default function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-background"
    >
      <div className="mb-8">
        {/* Replace with your actual Stevie logo */}
        <img src={lacalle_logo} alt="Lacalle Logo" className="w-64" />
      </div>
      <h1 className="text-4xl font-bold mb-8">
        <strong className="text-[#9d247d] font-extrabold">AI</strong>{" "}
      </h1>
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

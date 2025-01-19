import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Loader2 } from "lucide-react";
// import { Toast } from "../components/ui/toast";

const api_url = import.meta.env.VITE_BACKEND_AUTH_URL;

export default function CreatePodcast() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAudioSrc(null);

    if (!file || !email) {
      //   Toast({
      //     title: "Error",
      //     description: "Please provide both a PDF file and an email address.",
      //     variant: "destructive",
      //   });
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("podcast_file", file);
    formData.append("email", email);

    try {
      const response = await fetch(
        `${api_url}/uploads/podcast-file`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload");
      }
      const audioBlob = await response.blob();

      console.log("Audio Blob: ");
      console.log(audioBlob);

      // Crear una URL para el audio y guardarla en el estado
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioSrc(audioUrl);

      //   Toast({
      //     title: "Success",
      //     description: "Your podcast creation request has been submitted.",
      //   });
      // Reset form
      setFile(null);
      setEmail("");
    } catch (error) {
      console.error("Upload error:", error);
      //   Toast({
      //     title: "Error",
      //     description:
      //       "Failed to submit podcast creation request. Please try again.",
      //     variant: "destructive",
      //   });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto py-12">
      <Card>
        <CardHeader>
          <CardTitle>Create Podcast</CardTitle>
          <CardDescription>
            Upload a PDF and provide your email to create a podcast
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pdf-upload">Upload PDF</Label>
              <Input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading | audioSrc}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Podcast...
                </>
              ) : (
                "Create Podcast"
              )}
            </Button>
            {audioSrc && (
              <div className="w-full space-y-4">
                <audio controls className="w-full">
                  <source src={audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <Button asChild className="w-full">
                  <a href={audioSrc} download="podcast.mp3">
                    Download Audio
                  </a>
                </Button>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

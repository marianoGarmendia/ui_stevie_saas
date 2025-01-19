import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { DropdownMenuSeparator } from "../components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  WandIcon,
  ChevronDownIcon,
  XIcon,
  Share2,
  Copy,
  Tags,
  Save,
  Loader2,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// import { useUser } from "../Context/userContext";
import { usePost } from "../Context/postContext";
import { useUser } from "../Context/userContext";

const tones = [
  "Professional",
  "Casual",
  "Humorous",
  "Inspirational",
  "Informative",
  "Persuasive",
  "Friendly",
  "Formal",
  "Enthusiastic",
  "Empathetic",
];

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState({
    name: "Instagram",
    icon: InstagramIcon,
  });
  const [keywords, setKeywords] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [selectedTone, setSelectedTone] = useState(tones[0]);
  const [postTheme, setPostTheme] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useUser();
  // const { user, setUser } = useUser();
  const { post, setPosts } = usePost();

  const platforms = [
    { name: "Instagram", icon: InstagramIcon },
    { name: "LinkedIn", icon: LinkedinIcon },
    { name: "Facebook", icon: FacebookIcon },
  ];

  const handleKeywordInputChange = (e) => {
    setCurrentKeyword(e.target.value);
  };

  const handleKeywordInputKeyDown = (e) => {
    if (e.key === "," && currentKeyword.trim()) {
      e.preventDefault();
      setKeywords([...keywords, currentKeyword.trim()]);
      setCurrentKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const url = import.meta.env.VITE_BACKEND_GENERATION_URL;
  // Hacer validaciones de que todos los campos estan completos, ademas sacar la funcion fuera del componente y también hacer un loading, y un mensaje de error si no se pudo generar el post, y si se genero un mensaje de exito, y si se genero un post, mostrarlo en pantalla y dar la opción de guardarlo y tener un contexto mas global para poder acceder al post desde distintos componentes
  const generatingPost = async () => {
    // fFalta evaluar si esta vacío el contenido no hace la peticion
    setIsLoading(true);
    try {
      const response = await fetch(`${url}/generate-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          red_social: selectedPlatform.name,
          palabras_clave: keywords,
          tono: selectedTone,
          tema: postTheme,
          id: user.id
        }),
      });
      if (response.ok) {
        const post = await response.json();
        console.log(post);
        setPosts((prevPost) => [...prevPost, post]);
        setIsLoading(false);
      } else {
        throw new Error("Error generating post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container  max-w-4xl mx-auto py-12">
      <div className="text-center flex flex-col gap-8 mb-12">
        <div className="flex justify-center mb-4">
          <span className="text-4xl">👋</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Hey, Here <span className="text-teal-500">Stevie</span>!
        </h1>
        <p className="text-muted-foreground mb-8">
          Let Followr suggest engaging social media posts. Just select the
          options below and click on Generate!
        </p>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex gap-4 justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <selectedPlatform.icon className="w-4 h-4" />
                    {selectedPlatform.name}
                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {platforms.map((platform) => (
                    <DropdownMenuItem
                      key={platform.name}
                      onClick={() => setSelectedPlatform(platform)}
                      className="gap-2"
                    >
                      <platform.icon className="w-4 h-4" />
                      {platform.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" className="gap-2">
                <WandIcon className="w-4 h-4" />
                AI-Image
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {keywords.map((keyword, index) => (
                  <Button
                    key={index}
                    variant="secondary"
                    size="sm"
                    className="gap-1"
                    onClick={() => removeKeyword(keyword)}
                  >
                    {keyword}
                    <XIcon className="w-3 h-3" />
                  </Button>
                ))}
              </div>
              <Input
                id="keywords"
                placeholder="Enter keywords, separate with comma"
                value={currentKeyword}
                onChange={handleKeywordInputChange}
                onKeyDown={handleKeywordInputKeyDown}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedTone}
                    <ChevronDownIcon className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {tones.map((tone) => (
                    <DropdownMenuItem
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme">Post Theme</Label>
              <Input
                id="theme"
                placeholder="Enter the theme of your post"
                value={postTheme}
                onChange={(e) => setPostTheme(e.target.value)}
              />
            </div>
          </div>

          <Button
            onClick={generatingPost}
            className="w-full m-4 mx-auto"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Post...
              </>
            ) : (
              <>
                <WandIcon className="w-4 h-4 mr-2" />
                <span>Generate Post</span>
              </>
            )}
          </Button>
        </Card>
        <div className="grid gap-6">
          {post.length > 0 &&
            post.map((post) => (
              <Card key={post.id} className="w-[600px]  mx-auto">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <span className="font-medium">{post.user}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <Button variant="outline" size="sm">
                      <Tags className="w-4 h-4 mr-2" />
                      Insert tags
                    </Button> */}
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="text-teal-500"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                  </div>
                </div>

                <div className="aspect-square relative h-[350px]">
                  <img
                    src={post.image}
                    alt="Post preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    {/* <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon"> 
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div> */}
                    {/* <Button variant="ghost" size="icon">
                      <Bookmark className="w-4 h-4" />
                    </Button> */}
                  </div>
                  <h2 className="text-start font-black">{post.titulo}</h2>
                  {/* <p className="text-sm mb-3">{post.post}</p> */}
                  <br />
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="text-justify"
                  >
                    {post.post}
                  </ReactMarkdown>
                  {/* <ReactMarkdown>{post.post}</ReactMarkdown> */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.palabras_clave.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-teal-500 hover:bg-teal-600">
                      Publish
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

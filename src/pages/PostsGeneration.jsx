import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Badge } from "../components/ui/badge";
import {
  Heart,
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  Share2,
  Copy,
  Tags,
  Save,
} from "lucide-react";
import { usePost } from "../Context/postContext";

export default function PostsGeneration() {
  const { post } = usePost();

  // const post = {
  //   post: `🎉 ¡Estudiantes de La Plata se consagra campeón del Trofeo de Campeones 2024 con una contundente victoria 3-0 sobre Vélez Sarsfield! 🎉\n\nEn un vibrante partido, Estudiantes demostró por qué es considerado el ‘5to grande’ del fútbol argentino. Con una actuación magistral, Tomás Marchiori marcó en contra, seguido por los goles de Alexis Manyoma y Guido Carrillo, sellando así una temporada memorable.\n\nPero más allá del marcador, este triunfo pone de relieve el espíritu indomable y el talento que caracteriza al fútbol argentino. Estudiantes y Vélez, dos titanes de la liga, mostraron al mundo la pasión y el fervor que solo el fútbol de esta nación puede ofrecer.\n\n🎯 Para la comunidad empresarial y de LinkedIn, este resultado no solo es un reflejo del alto nivel competitivo, sino también un ejemplo de liderazgo, estrategia y trabajo en equipo, valores fundamentales tanto en el campo de juego como en el mundo corporativo.\n\n🤔 ¿Qué opinan ustedes sobre este emocionante cierre de temporada? ¿Cómo creen que estos valores deportivos pueden influir en el entorno profesional? ¡Deja tus comentarios abajo! ⚽️🏆\n\n#FutbolArgentino #Ganador #Campeon #El5toGrande`,
  //   titulo: "¡Estudiantes de La Plata: Campeón del Trofeo de Campeones 2024!",
  //   red_social: "LinkedIn",
  //   tono: "Enthusiastic",
  //   tema: "Estudiantes campeón de la copa de campeones antes de Vélez, ¿qué opina la gente?",
  //   palabras_clave: ["futbol argentino", "ganador", "campeon", "el 5to grande"],
  //   id: "2536",
  // };
  // const posts = [
  //   {
  //     id: 1,
  //     user: "Stevie Test User",
  //     image: "/placeholder.svg?height=400&width=400",
  //     caption:
  //       "Hey there, social media enthusiasts! 👋 Choosing the right metrics is like picking the perfect outfit for your goals. Make sure you're tracking what really matters for your brand's success. Remember, vanity metrics might look flashy, but it's the actionable data that'll truly help you grow! 📊",
  //     tags: ["metrics", "analytics", "growth", "socialmedia", "marketing"],
  //   },
  //   {
  //     id: 2,
  //     user: "Followr Test User",
  //     image: "/placeholder.svg?height=400&width=400",
  //     caption:
  //       "Hey social media superstars! 🌟 Did you know that consistency is key when it comes to growing your accounts? Posting regularly keeps your audience engaged and helps you stay on top of those tricky algorithms.",
  //     tags: ["consistency", "growth", "engagement", "socialmedia"],
  //   },
  // ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6">
        {post.length > 0 &&
          post.map((post) => (
            <Card key={post.id} className="max-w-2xl mx-auto">
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <span className="font-medium">{post.user}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Tags className="w-4 h-4 mr-2" />
                    Insert tags
                  </Button>
                  <Button variant="outline" size="sm" className="text-teal-500">
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
                  </DropdownMenu>
                </div>
              </div>

              <div className="aspect-square relative">
                <img
                  src={post.image}
                  alt="Post preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
                <h2>{post.titulo}</h2>
                <p className="text-sm mb-3">{post.post}</p>

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
  );
}

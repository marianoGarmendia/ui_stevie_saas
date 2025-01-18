// // import { usePost } from "../Context/postContext";
// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { ThumbsUp, MessageSquare, Share2, Send } from "lucide-react";
// import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

// export default function LinkedInPostPreview({ post }) {
//   //   const { post } = usePost();
//   return (
//     <Card className="max-w-xl w-full bg-white">
//       {/* Header */}
//       <div className="p-4">
//         <div className="flex items-start gap-2">
//           <Avatar className="h-12 w-12">
//             {/* <AvatarImage src={post.authorImage} alt={post.authorName} /> */}
//             {/* <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback> */}
//           </Avatar>
//           <div className="flex-1">
//             <h3 className="font-semibold text-[14px] text-gray-900">
//               {post.authorName}
//             </h3>
//             <p className="text-[12px] text-gray-600">{post.authorTitle}</p>
//             <div className="flex items-center gap-1 text-[12px] text-gray-600">
//               <span>{post.timestamp}</span>
//               {post.isPublic && (
//                 <>
//                   <span>•</span>
//                   <span>🌐</span>
//                 </>
//               )}
//             </div>
//           </div>
//           <Button variant="ghost" size="sm" className="text-gray-500">
//             •••
//           </Button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="px-4 pb-2">
//         <p className="text-[14px] text-gray-900 whitespace-pre-wrap">
//           {post.content}
//         </p>
//       </div>

//       {/* Metrics */}
//       <div className="px-4 py-1 border-b">
//         <div className="flex items-center justify-between text-[12px] text-gray-600">
//           <div className="flex items-center gap-1">
//             <div className="flex -space-x-1">
//               <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">
//                 👍
//               </div>
//               <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">
//                 💡
//               </div>
//             </div>
//             <span>{post.reactions}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span>{post.comments} comentarios</span>
//             <span>•</span>
//             <span>{post.shares} veces compartido</span>
//           </div>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="px-2 py-1">
//         <div className="flex items-center justify-between">
//           <Button variant="ghost" size="sm" className="text-gray-600 flex-1">
//             <ThumbsUp className="w-4 h-4 mr-2" />
//             Recomendar
//           </Button>
//           <Button variant="ghost" size="sm" className="text-gray-600 flex-1">
//             <MessageSquare className="w-4 h-4 mr-2" />
//             Comentar
//           </Button>
//           <Button variant="ghost" size="sm" className="text-gray-600 flex-1">
//             <Share2 className="w-4 h-4 mr-2" />
//             Compartir
//           </Button>
//           <Button variant="ghost" size="sm" className="text-gray-600 flex-1">
//             <Send className="w-4 h-4 mr-2" />
//             Enviar
//           </Button>
//         </div>
//       </div>
//     </Card>
//   );
// }

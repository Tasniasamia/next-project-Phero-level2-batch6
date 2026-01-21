
// 'use client';
// import { PostStatus } from "@/constants/postStatus";
// import { blogService } from "@/services/blog.service";
// import { userService } from "@/services/user.service";
// import { use } from "react";

// export interface Post {
//     id: number;
//     title: string;
//     content: string;
//     thumbnail?: string | null;
//     isFeatured: boolean;
//     status:PostStatus;
//     tags: string[];
//     views: number;
//     authId: string;
//     createdAt: string;
//     updatedAt: string;
//   }
  
 
  

//   const BlogList = () => {
//     // const {data:userData,error:userError}=use(userService.getSession());
//     // console.log("userdata",userData);
//    const {data,error}=use(blogService.getPost());
//    console.log("bloglist data",data)
//     return (
//       <div>
//         {(data?.data).map((post:Post) => (
//           <div key={post.id}>
//           <p >{post.title}</p>
//           <button onClick={()=>{console.log(post)}}>Click Me</button>
//           </div>
//         ))}
//       </div>
//     );
//   };
//   export default BlogList;


"use client";

import { use } from "react";
import { PostStatus } from "@/constants/postStatus";

export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail?: string | null;
  isFeatured: boolean;
  status: PostStatus;
  tags: string[];
  views: number;
  authId: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogList({
  posts,
}: {
  posts: Promise<{ data: Post[] |any}>;
}) {
  const resolved = use(posts);
  console.log("posts",posts);

  const data = resolved.data;
console.log("data",data?.data);
  return (
    <div>
      {data?.data?.map((post:Post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <button onClick={() => console.log(post)}>Click Me</button>
        </div>
      ))}
    </div>
  );
}

"use client"

import { userService } from "@/services/user.service";
import { use } from "react";

export interface Post {
    id: number;
    title: string;
    content: string;
    thumbnail?: string | null;
    isFeatured: boolean;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    tags: string[];
    views: number;
    authId: string;
    createdAt: string;
    updatedAt: string;
  }
  
 
  
  const BlogList = ({ data }: { data: Promise<Post[]> }) => {
    // const sessionData=use(userService.getSession());
    console.log(data);
  
    return (
      <div>
        {/* {data2.map(post => (
          <p key={post.id}>{post.title}</p>
        ))} */}
      </div>
    );
  };
  export default BlogList;
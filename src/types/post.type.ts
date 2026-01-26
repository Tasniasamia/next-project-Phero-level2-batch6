import { PostStatustype } from "./post.status.type";

export interface Post {
    id: number;
    title: string;
    content: string;
  
    thumbnail?: string | null;
  
    isFeatured: boolean;
    status: PostStatustype;
  
    tags: string[];
    views: number;
  
    authId: string;
  
    createdAt: Date;
    updatedAt: Date;
  
    comments: Comment[];
  }
  
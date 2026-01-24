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
  
    createdAt: Date;
    updatedAt: Date;
  
    comments: Comment[];
  }
  
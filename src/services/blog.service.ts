import { env } from "@/env";
import { Post } from "@/types";
import { PostStatustype } from "@/types/post.status.type";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";

interface QueryOptions {
  search: string;
  tags: string;
  isFeatured: boolean;
  status: PostStatustype;
  authId: string;
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
}
interface TOptions {
  cache?: RequestCache | undefined;
  revalidate?: number | false | undefined;
}

const API_URL = env.BACKEND_URL;

export const blogService = {
  getPost: async (queries?: QueryOptions, options?: TOptions) => {
    try {
      const url = new URL(`${API_URL}/post`);
      if (queries) {
        Object.entries(queries).forEach(([key, value]) => {
          //  if((value!="") && (value!=undefined) && (value!=null)){
          //   url.searchParams.append(key, value);
          //  }
          // console.log("key",key,"value",value)
          if (!["", undefined, null].includes(value)) {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = {
          revalidate: options?.revalidate,
       
        } ;
      }
      config.next = { ...config.next, tags: ["posts"] };

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
  createPost: async (
    postBlogData: Omit<
      Post,
      | "createdAt"
      | "updatedAt"
      | "views"
      | "isFeatured"
      | "status"
      | "id"
      | "comments"
    >
  ) => {
    try {
      const cookieStore = await cookies();
      const createBlogPost = await fetch(`${API_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(postBlogData),
      });
      const res = await createBlogPost.json();
      if (res?.success) {
   

        return { data: res, error: null };
      }
      return { data: null, error: res.error };
    } catch (error) {
      return { data: null, error: error };
    }
  },
};

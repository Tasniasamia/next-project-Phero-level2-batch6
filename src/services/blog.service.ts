import { PostStatus } from "@/constants/postStatus";
import { env } from "@/env";

interface QueryOptions {
  search: string | undefined;
  tags: string;
  isFeatured: boolean | undefined;
  status: PostStatus | undefined;
  authId: string | undefined;
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

export const blogService = {
  getPost: async (
    queries?: QueryOptions,
    options?: TOptions
  ) => {
    try {
      const url = new URL(`${env.BACKEND_URL}/post`);
      if(queries){
        Object.entries(queries).forEach(([key, value]) => {
            url.searchParams.append(key, value);
          });
      }
     
      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      const res = await fetch(url.toString(), config);
      const data = await res.json();
      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};

import { env } from "@/env";
import { PostStatustype } from "@/types/post.status.type";

interface QueryOptions {
  search: string ;
  tags: string;
  isFeatured: boolean ;
  status: PostStatustype;
  authId: string ;
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
          //  if((value!="") && (value!=undefined) && (value!=null)){
          //   url.searchParams.append(key, value);
          //  }
          // console.log("key",key,"value",value)
          if (![ "", undefined, null ].includes(value)) {
            url.searchParams.append(key, String(value));
          }
          
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

      
      return {data:data,error:null}
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};

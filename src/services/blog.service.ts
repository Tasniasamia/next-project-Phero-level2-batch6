import { PostStatus } from "@/constants/postStatus";
import { env } from "@/env";

interface QueryOptions {
  search: string ;
  tags: string;
  isFeatured: boolean ;
  status: PostStatus;
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
      console.log("coming here");
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
      console.log("data of service",data);

      
      return {data:data,error:null}
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};

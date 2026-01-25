'use server'

import { PostStatus } from "@/constants/postStatus";
import { blogService } from "@/services/blog.service";
import { PostStatustype } from "@/types/post.status.type";

interface QueryOptions {
  search: string;
  tags: string;
  isFeatured: boolean ;
  status: PostStatustype ;
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

export const getPost = async (
  query?: Partial<QueryOptions>,
  option?: Partial<TOptions>
) => {
  try {
    const queries: QueryOptions = {
      search: query?.search ?? "",
      tags: query?.tags ?? "",
      isFeatured: query?.isFeatured ?? false,
      status: query?.status?? PostStatus.PUBLISHED,
      authId: query?.authId ?? "",

      page: query?.page ?? 1,
      limit: query?.limit ?? 10,
      skip: query?.skip ?? 0,

      sortBy: query?.sortBy ?? "createdAt",
      sortOrder: query?.sortOrder ?? "desc",
    };

    const options: TOptions = {
      cache: option?.cache,
      revalidate: option?.revalidate,
    };

    const blogData = await blogService.getPost(queries,options);
console.log("blogData",blogData);
    return { data: blogData.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

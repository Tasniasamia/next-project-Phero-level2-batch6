import { PostStatus } from "@/constants/postStatus";

export type PostStatustype =
(typeof PostStatus)[keyof typeof PostStatus];
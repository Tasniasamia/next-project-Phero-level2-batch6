import { route } from "@/types";

export const adminRoutes:route = {
  user: {
    name: "User",
    email: "user@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
   
    documents: [
      {
        name: "blog",
        url: "/admin/blog",
      }
    ],
  }
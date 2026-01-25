import { route } from "@/types";

export const userRoutes:route= {
    user: {
      name: "User",
      email: "user@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
   
    documents: [
      {
        name: "Create Blog",
        url: "/dashboard/create_blog",
      },
      {
        name: "Setting",
        url: "/dashboard/setting",
      },
    ],
  }
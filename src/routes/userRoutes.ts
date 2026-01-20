import { route } from "@/types";

export const userRoutes:route= {
    user: {
      name: "User",
      email: "user@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
   
    documents: [
      {
        name: "user",
        url: "/user",
      },
      {
        name: "favourite",
        url: "/favourite",
      }
    ],
  }
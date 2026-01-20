import { route } from "@/types";

export const adminRoutes:route = {
    user: {
      name: "Admin",
      email: "admin@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
   
    documents: [
      {
        name: "admin",
        url: "/admin",
      },
      {
        name: "payroll",
        url: "/payroll",
      },
      {
        name: "settings",
        url: "/settings",
      },
    ],
  }
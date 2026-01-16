
export const adminRoutes :{user:{name:string,email:string,avatar:string},documents:{name:string,url:string}[]} = {
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
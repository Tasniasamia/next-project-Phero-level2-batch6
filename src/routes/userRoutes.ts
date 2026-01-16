
export const userRoutes :{user:{name:string,email:string,avatar:string},documents:{name:string,url:string}[]} = {
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
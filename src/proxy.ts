import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { roles } from "./constants/roles";

export const proxy=async(request:NextRequest)=>{
  // try{
   const {data}=await userService.getSession();
   let isAuthenticate=false;
   let isAdmin=false;
   let path=request.nextUrl.pathname;
   console.log(path);
   if(data){
    isAuthenticate=true;
    isAdmin=data?.user?.role===roles.ADMIN;

   }
   console.log("isAdmin",isAdmin);

   if(!isAuthenticate){
    return NextResponse.redirect(new URL('/login',request.url));

   }  
    if(isAdmin && path.startsWith('/user')){
    return  NextResponse.redirect(new URL('/admin',request.url));
    }

    if(!isAdmin && path.startsWith('/admin')){
    return  NextResponse.redirect(new URL('/user',request.url));
    }
   return NextResponse.next();


}

export const config={
  matcher: ['/admin','/user','/admin/:path*', '/user/:path*']
}
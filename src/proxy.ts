"use server";

import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { roles } from "./constants/roles";

export const proxy=async(request:NextRequest)=>{
   const {data}=await userService.getSession();
   let isAuthenticate=false;
   let isAdmin=false;
   let path=request.nextUrl.pathname;
   console.log(path);
   if(data){
    isAuthenticate=true;
    isAdmin=data?.user?.role===roles.ADMIN;

   }

   if(!isAuthenticate){
    return NextResponse.redirect(new URL('/login',request.url));

   }  
    if(isAdmin && path.startsWith('/dashboard')){
    return  NextResponse.redirect(new URL('/admin',request.url));
    }

    if(!isAdmin && path.startsWith('/admin')){
    return  NextResponse.redirect(new URL('/dashboard',request.url));
    }
   return NextResponse.next();
}

export const config={
  matcher: ['/admin','/dashboard','/admin/:path*', '/dashboard/:path*']
}
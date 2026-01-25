
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { userService } from "@/services/user.service"
import { Role, roles } from "@/constants/roles"
/* use client*/
// import { setRoleCookie } from "@/helpers/utils";
// import React, { useEffect } from "react"


export default async function Page({admin,user}:{admin:React.ReactNode,user:React.ReactNode}) {
    /*use client*/
    // const userRole:{role:"admin"|"user"}={role:"admin"};
    // useEffect(()=>{
    //   setRoleCookie(userRole?.role);
    // },[userRole?.role])
    console.log("coming here");

    const {data,error}=await userService.getSession();
    console.log(data);
    const role = data?.data?.user?.role;
    type UserRole = {
      role: Role;
    };
    
    const userRole: UserRole = {
      role: role === roles.ADMIN ? roles.ADMIN : roles.USER,
    };
    
  
    
       console.log("userRole",userRole);
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
            <AppSidebar   userRole={userRole} />

      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-7 p-6">
          {userRole.role === "admin"? admin:user}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

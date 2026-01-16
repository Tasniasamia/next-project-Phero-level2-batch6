"use client";
import { AppSidebar } from "@/components/app-sidebar"

import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { setRoleCookie } from "@/helpers/utils";
import React, { useEffect } from "react"


export default function Page({admin,user}:{admin:React.ReactNode,user:React.ReactNode}) {
    
    const userRole:{role:"admin"|"user"}={role:"admin"};
    useEffect(()=>{
      setRoleCookie(userRole?.role);
    },[userRole?.role])
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

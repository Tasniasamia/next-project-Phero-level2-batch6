"use client"

import { authClient } from "@/lib/auth_client"
import React, { createContext, useContext, useState } from "react"



const AuthContext = createContext<{} | null>(null)

export  function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data: session } = authClient.useSession()
  
  return (
    <AuthContext.Provider value={session}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  // if (!ctx) {
  //   throw new Error("useSignup must be used inside SignupProvider")
  // }
  return ctx;
}
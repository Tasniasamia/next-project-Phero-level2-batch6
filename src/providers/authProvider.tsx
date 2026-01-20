"use client";

import { env } from "@/env";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthUser = any; // চাইলে proper type বসাতে পারো

const AuthContext = createContext<AuthUser | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL2}/api/auth/get-session`, {
          method: "GET",
          credentials: "include", // ✅ cookie যাবে server এ
        });

        const data = await res.json();
        setUser(data?.user ?? null);
      } catch (err) {
        console.error("Failed to get session", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, []); // ✅ important

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

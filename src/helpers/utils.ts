export function setRoleCookie(role: "admin" | "user") {
    document.cookie = `role=${role}; path=/; max-age=86400; samesite=lax`;
  }
  

export interface user {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    role: "USER" | "ADMIN"; // চাইলে extend করতে পারো
    twoFactorEnabled: boolean;
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
  }
  
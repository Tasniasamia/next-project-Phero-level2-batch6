import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
 server: {
    BACKEND_URL_VARIABLE: z.url(),
    BACKEND_URL: z.url(),
    PORT: z.coerce.number(),
    ENDPOINT:z.string(),
  },
 
  client: {
    NEXT_PUBLIC_BACKEND_URL2: z.url(),
  },
 
  runtimeEnv: {
    BACKEND_URL_VARIABLE: process.env.BACKEND_URL_VARIABLE,
    BACKEND_URL:process.env.BACKEND_URL,
    PORT:process.env.PORT,
    ENDPOINT:process.env.ENDPOINT,
    NEXT_PUBLIC_BACKEND_URL2:process.env.NEXT_PUBLIC_BACKEND_URL2
  },
});
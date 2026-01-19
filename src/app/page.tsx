import { authClient } from "@/lib/auth_client";

export default async function Home() {

const { data: session } = await authClient.getSession();
console.log('data',session);
  return (
<div>
  This is home page
</div>
  );
}

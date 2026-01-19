import { userService } from "@/services/user.service";

export default async function Home() {

 const {data,error}=await userService.getSelection();
 console.log("home",data);
  return (
<div>
  This is home page
</div>
  );
}

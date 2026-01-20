import { cookies } from "next/headers";

export const userService={
    getSession: async function (){
        try{
          const cookie=await cookies();
          const res = await fetch("http://localhost:5000/api/auth/get-session", {
            headers:{Cookie:cookie.toString()},
            cache:'no-store'
          });
          const data=await res.json();
          console.log(data);
          return {data,error:null}
          }
        catch(error){
            console.error(error);
            return {data:null,error}
        }
    }
}
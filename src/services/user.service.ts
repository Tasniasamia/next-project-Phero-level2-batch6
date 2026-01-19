import { cookies } from "next/headers";

export const userService={
    getSelection: async function (){
        try{
          const cookie=await cookies();
          const res = await fetch("http://localhost:5000/api/auth/get-session", {
            headers:{Cookie:cookie.toString()},
            cache:'no-store'
          });
          const data=await res.json();
          return {data,error:null}
          }
        catch(error){
            console.error(error);
            return {data:null,error}
        }
    }
}
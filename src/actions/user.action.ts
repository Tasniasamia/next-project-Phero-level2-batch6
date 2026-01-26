'use server'
import { userService } from "@/services/user.service";

export const getUser = async () => {
try {
const userData = await userService.getSession();
// console.log("userData",userData?.data?.user);
return { data: userData?.data?.user, error: null };
} 
catch (error) {
return { data: null, error };
}
};

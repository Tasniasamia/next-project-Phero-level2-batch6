// import { SignupForm } from "@/components/signup-form"

import { SignupForm } from "@/components/modules/authentication/signupForm";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-1/4 max-w-auto">
        {/* <SignupForm /> */}
        <SignupForm/>
      </div>
    </div>
  )
}

"use client";

import { Button } from "../ui/button";

const VerificationComponent = ({ token }: { token: string }) => {
  const handleClick = () => {
    window.location.href = `http://localhost:5000/api/auth/verify-email?token=${token}`;
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col bg-red-300 p-24 gap-6 w-fit">
        <h1 className="text-2xl text-center text-accent">
          Please verify your email
        </h1>
        <Button onClick={handleClick}>
          Click Here
        </Button>
      </div>
    </div>
  );
};

export default VerificationComponent;



// "use client";

// import { Button } from "@/components/ui/button";
// import { authClient } from "@/lib/auth_client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const VerificationComponent = ({ token }: { token: string }) => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleVerify = async () => {
//     try {
//       setLoading(true);

//       const res = await authClient.verifyEmail({
//         query: { token },
//       });

//       if (res?.data) {
//         // ✅ cookie already set
//         // ✅ autoSignInAfterVerification works
//         router.push("/"); // or /dashboard
//       } else {
//         setError("Verification failed");
//       }
//     } catch (err) {
//       setError("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center">
//       <div className="flex flex-col gap-4 p-8 border rounded">
//         <h1 className="text-xl font-semibold">Verify your email</h1>

//         {error && <p className="text-red-500">{error}</p>}

//         <Button onClick={handleVerify} disabled={loading}>
//           {loading ? "Verifying..." : "Verify Email"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default VerificationComponent;

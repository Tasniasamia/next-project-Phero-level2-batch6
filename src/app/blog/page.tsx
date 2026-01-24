/*Checking by environment variable*/

// import BlogList from "@/components/modules/blog/card";
// import { env } from "@/env";
// import { blogService } from "@/services/blog.service";

// const page = async() => {
//     console.log(env.BACKEND_URL);
//     // const res = await fetch(`${env.BACKEND_URL_VARIABLE}`);
//     // const res = await fetch(`${env.BACKEND_URL}/post`,{ next: { revalidate: 2 },cache:'no-store' });
//     // const data = await res.json();
//    const {data,error}=await blogService.getPost();
//    console.log("data",data);
//     return (
//         <div>
//             This is blog page
//             <BlogList />
//         </div>
//     );
// };
// export default page;




/*For use() hook promise sending*/

// import { Suspense } from "react";
// import { blogService } from "@/services/blog.service";
// import BlogList from "@/components/modules/blog/card";

// export default function Page() {
//   const postsPromise = blogService.getPost(); 

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <BlogList posts={postsPromise} />
//     </Suspense>
//   );
// }

import BlogSubComponent from '@/components/modules/blog/blogSubComponent';

const page = () => {
  return (
    <div>
      <BlogSubComponent/>
    </div>
  );
};

export default page;
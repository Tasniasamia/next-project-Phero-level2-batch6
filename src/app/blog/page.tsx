import BlogList from "@/components/modules/blog/card";
import { env } from "@/env";

const page = async() => {
    console.log(env.BACKEND_URL);
    // const res = await fetch(`${env.BACKEND_URL_VARIABLE}`);
    const res = await fetch(`${env.BACKEND_URL}/post`,{ next: { revalidate: 2 },cache:'no-store' });

    const data = await res.json();
    return (
        <div>
            This is blog page
            <BlogList data={data}/>
        </div>
    );
};

export default page;
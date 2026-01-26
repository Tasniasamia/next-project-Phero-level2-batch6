import BlogSubComponent from "@/components/modules/blog/blogSubComponent";
import { CreateBlogFormClient } from "@/components/modules/user/createBlog/createBlogFormClient";
import CreateBlogFormServer from "@/components/modules/user/createBlog/createBlogFormServer";


const page = () => {
    return (
        <div>
            {/* <CreateBlogFormServer/> */}
            <CreateBlogFormClient/>
            <BlogSubComponent/>
        </div>
    );
};

export default page;
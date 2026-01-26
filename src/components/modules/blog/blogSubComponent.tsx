// BlogSubComponent.tsx (NO "use client")
import { getPost } from "@/actions/blog.action";

const BlogSubComponent = async () => {
  const res = await getPost({}, {});

  return (
    <div>
      <p>See Your blog LIST</p>
      {res?.data?.data?.map((i: any) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </div>
  );
};

export default BlogSubComponent;

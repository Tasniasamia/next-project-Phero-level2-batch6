import { blogService } from "@/services/blog.service";

export const dynamicParams = true;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export const revalidate = 2;
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data, error } = await blogService.getPost();
  console.log(data);
  const { id } = await params;
  return (
    <div>
      <div>My Post: {id}</div>

      {data?.data?.map((service: any) => {
        return <p> Service title is {service?.title}</p>;
      })}
    </div>
  );
}

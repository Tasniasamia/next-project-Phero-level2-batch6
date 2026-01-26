import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { Post } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CreateBlogFormServer = async () => {

  /* parallel Fetching start*/

  // const userData = userService.getSession();
  // const blogData=blogService.getPost();
  // const [user,blog]=await Promise.all([userData,blogData])
  
    /* parallel Fetching end*/

  const { data, error } = await userService.getSession();
  const API_URL = env.BACKEND_URL;
  const postBlog = async (form: any) => {
    "use server";
    const postBlogData = {
      authId: data?.user?.id,
      title: form.get("title"),
      content: form.get("content"),
      tags: form
        .get("tags")
        .split(",")
        .map((i: string) => i.trim())
        .filter((j: string) => j != ""),
    };
    let res;
    try {
 
      const cookieStore = await cookies();

      const createBlogPost = await fetch(`${API_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(postBlogData),
      });
      res = await createBlogPost.json();
      console.log("res", res);
    } catch (error) {
      redirect(`/dashboard/create_blog?error=${JSON.stringify(error)}`);
    }
    if (res?.success) {
      redirect(`/dashboard`);
      return;
    }
    redirect(`/dashboard/create_blog`);
    return;
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="create-blog-form" action={postBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input
                id="title"
                name="title"
                required
                placeholder="Blog Title"
              />
            </Field>
            <Field>
              <FieldLabel>Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                required
                placeholder="Blog Title"
              />
            </Field>
            <Field>
              <FieldLabel>Tags</FieldLabel>
              <Input id="tags" name="tags" required placeholder="Tags" />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="create-blog-form" type="submit">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateBlogFormServer;

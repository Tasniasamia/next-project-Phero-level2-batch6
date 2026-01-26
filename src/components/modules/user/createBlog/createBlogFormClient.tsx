"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import z from "zod";
import { useForm } from "@tanstack/react-form";
import { authClient } from "@/lib/auth_client";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/user.action";
import { createBlogPost } from "@/actions/blog.action";

export function CreateBlogFormClient({ ...props }: React.ComponentProps<typeof Card>) {
 const [user,setUser]=useState<any>(null);
 useEffect(()=>{
    (async()=>{
        const userData=await getUser();
        setUser(userData?.data);

    })()
 },[])
 console.log("user data of createBlog",user);
  const formSchema = z
    .object({
      title:z.string(),
      content:z.string(),
      tags:z.string()
    });

    

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      tags: ""
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toatId = toast.loading("Creating Blog");
      try {
        const { title,content,tags } = value;
        const postBlogData :{authId:string,title:string,content:string,tags:string[]}= {
            authId: user?.id ,
            title: title,
            content: content,
            tags: tags
              .split(",")
              .map((i: string) => i.trim())
              .filter((j: string) => j != ""),
          };
        const res=await createBlogPost(postBlogData);
        console.log("res",res);
        if (res?.data?.success) {
          toast.success(res?.data?.message||"Post Created Successfully", { id: toatId });
          return;
        }
        toast.error(JSON.stringify(res?.error), { id: toatId });
        return;
      } catch (err: any) {
        toast.error(err?.message, { id: toatId });
      }
    },
  });



  
  
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create New Blog</CardTitle>
        <CardDescription>
          Enter your information below to create your blog
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="blog-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Blog Title"
                      autoComplete="off"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="content"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Content</FieldLabel>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Blog Content"
                      autoComplete="off"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
          
                  </Field>
                );
              }}
            />

            <form.Field
              name="tags"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Tags</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Tags"
                      autoComplete="off"
                      type="text"
                      required
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
            
                  </Field>
                );
              }}
            />

      
            <Button type="submit" form="blog-form">
              Save
            </Button>
   
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

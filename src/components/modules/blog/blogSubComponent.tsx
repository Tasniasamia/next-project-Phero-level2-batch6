"use client";

import { getPost } from "@/actions/blog.action";
import { Post } from "@/types";
import { useEffect, useState } from "react";

const BlogSubComponent = () => {
    const [data,setData]=useState<null|any>({});
    const [error,setError]=useState<null|any>({});
    useEffect(()=>{
        (async()=>{
            console.log("coming here");

            const res = await getPost(
                {page:1,limit:6},
                { cache: "no-store" }
              );
              console.log("resdata",res);
         setData(res?.data);
         setError(res?.error);

        })()
    },[])

    console.log("data",data);

    return (
        <div>
            <p>See Your blog LIST</p>
            {
                data?.data?.map((i:Post)=>{
                    return (
                        <p key={i?.id}>{i?.title}</p>
                    )
                })
            }
        </div>
    );
};

export default BlogSubComponent;
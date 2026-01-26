'use client'
import { use } from 'react'
 
export default function ProductPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  return (
    <div>
      {/* <p>{slug?.map((i)=>{
        return (
            <p>{i}</p>
        )
      })}</p> */}
    </div>
  )
}
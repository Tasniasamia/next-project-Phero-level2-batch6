import { PaginationCustom } from '@/components/common/pagination';
import HistoryTable from '@/components/modules/user/history/historyTable';
import { blogService } from '@/services/blog.service';
import React from 'react';

const page = async({
    searchParams
  }: {searchParams: Promise<{ page: string,limit:string }>
  }) => {
 const {page,limit}=await searchParams;
const pageInt=Number(page);
const limitInt=Number(limit);
console.log("page",pageInt);
console.log("limit",limit);
    const {data,error}=await blogService.getPost({page:pageInt,limit:limitInt},{});
 
    return (
        <div>
            <HistoryTable data={data?.data}/>
            <PaginationCustom meta={data?.pagination}/>
        </div>
    );
};

export default page;
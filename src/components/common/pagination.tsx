"use client";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type metaType = {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
export  function PaginationCustom({meta}: {meta:metaType}) {
    const route=useRouter();
    const[value,setValue]=useState<string|number>(10)
  console.log("meta", meta);
  const searchParams = useSearchParams();
  const {limit:pageSize,page:currentPage,total,totalPages}=meta;
  const naviateToPage = (page:number) => {
    const params=new URLSearchParams(searchParams.toString());
    params.set('page',page.toString());
    params.set('limit',value?.toString());
    route.push(`?${params.toString()}`);
  };
  return (
    <div className="flex items-center justify-between gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
        <Select   defaultValue={pageSize.toString()}
  onValueChange={(value) => {
    setValue(value)
  }}>
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={()=>{let page; naviateToPage(page=currentPage+1)}} aria-disabled={currentPage==1}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={()=>{let page; naviateToPage(page=currentPage-1)}} aria-disabled={currentPage==totalPages}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

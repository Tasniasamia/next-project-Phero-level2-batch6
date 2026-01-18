import VerificationComponent from "@/components/verification/veification";

export default async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string }>
  }) {
    const filters = (await searchParams);
    console.log("filters",filters?.token);
    return (
        <div>
            <VerificationComponent token={filters?.token}/>
        </div>
    )
  }
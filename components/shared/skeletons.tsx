import { Skeleton } from "@/components/ui/skeleton";

function PokeCardSkeleton() {
  return (
    <div className="min-h-56 border border-solid rounded-lg	p-6">
      <div>
        <Skeleton className="h-[24px] w-[140px]" />
      </div>
      <div>
        <Skeleton className="h-[20px] w-[30px] mt-2" />
      </div>
      <div>
        <Skeleton className="h-[96.45px] w-[100px] mx-auto" />
      </div>
    </div>
  );
}
export function PaginationSkeleton() {
  return (
    <div className="w-[311px] h-[40px] mx-auto flex">
      <div>
        <Skeleton className="h-[40px] w-[103px]" />
      </div>
      <div>
        <Skeleton className="h-[40px] w-[116px]" />
      </div>
      <div>
        <Skeleton className="h-[40px] w-[103px]" />
      </div>
    </div>
  );
}

export function PokeListSkeleton() {
  return (
    <>
      <ul className="flex flex-wrap gap-5 my-6">
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
        <li className="w-full sm:w-[48%] lg:w-[30%]">
          <PokeCardSkeleton />
        </li>
      </ul>
      <PaginationSkeleton />
    </>
  );
}

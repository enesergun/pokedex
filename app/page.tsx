import PokeList from "@/components/list/poke-list";
import PokeSearch from "@/components/list/poke-search";
import { PokeListSkeleton } from "@/components/shared/skeletons";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main>
      <Image
        src="/pokemon-logo.webp"
        width={275}
        height={75}
        alt="Pokemon Logo"
        className="mx-auto"
        placeholder="empty"
        blurDataURL="/pokeball.webp"
        priority
      />
      {/* <PokeSearch /> */}
      <Suspense fallback={<PokeListSkeleton />}>
        <PokeList currentPage={currentPage} />
      </Suspense>
    </main>
  );
}

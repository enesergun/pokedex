import PokeList from "@/components/list/poke-list";
import PokeSearch from "@/components/list/poke-search";
import PaginationWrapper from "@/components/shared/pagination-wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/pokemon-logo.png"
        width={350}
        height={200}
        alt="Pokemon Logo"
        className="mx-auto"
      />
      <PokeSearch />
      <PokeList />
      <PaginationWrapper />
    </main>
  );
}

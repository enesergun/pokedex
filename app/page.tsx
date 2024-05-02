import PokeList from "@/components/list/poke-list";
import PokeSearch from "@/components/list/poke-search";
import PaginationWrapper from "@/components/shared/pagination-wrapper";
import { fetchPokemons } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const data = await fetchPokemons(0);

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
      <PokeList data={data?.results} />
      <PaginationWrapper />
    </main>
  );
}

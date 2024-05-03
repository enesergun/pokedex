import Link from "next/link";
import PokeCard from "./poke-card";
import { PokeListPropTypes, PokemonListElementTypes } from "@/lib/definitions";
import PaginationWrapper from "@/components/shared/pagination-wrapper";
import { fetchPokemons } from "@/lib/data";
export default async function PokeList({
  currentPage,
}: {
  currentPage: number;
}) {
  const limit = Number(process.env.NEXT_PUCLIC_DEFAULT_LIMIT!);
  const offset = limit * (currentPage - 1);
  const data = await fetchPokemons(offset);

  return (
    <div>
      <ul className="flex flex-wrap gap-5 my-6">
        {data?.results.map(
          (pokemon: PokemonListElementTypes, index: number) => (
            <li
              key={`data_${pokemon.name}`}
              className="w-full sm:w-[48%] lg:w-[30%] "
            >
              <Link href={`pokemon-detail/${pokemon.name}`}>
                <PokeCard
                  name={pokemon.name}
                  order={Number(pokemon?.url?.split("/")?.reverse()[1])}
                />
              </Link>
            </li>
          )
        )}
      </ul>
      <PaginationWrapper
        count={Math.ceil(data?.count / limit)}
        next={data?.next}
        previous={data?.previous}
        currentPage={currentPage}
      />
    </div>
  );
}

import Link from "next/link";
import PokeCard from "./poke-card";
import { PokeListPropTypes, PokemonListElementTypes } from "@/lib/definitions";
import { fetchPokemons } from "@/lib/data";

export default async function PokeList() {
  const data = await fetchPokemons(0);
  return (
    <ul className="flex flex-wrap gap-5">
      {data?.results?.map((pokemon: PokemonListElementTypes, index: number) => (
        <li
          key={`data_${pokemon.id}`}
          className="w-full sm:w-[48%] lg:w-[30%] "
        >
          <Link href={`pokemon-detail/${pokemon.name}`}>
            <PokeCard name={pokemon.name} order={index + 1} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

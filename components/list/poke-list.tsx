import Link from "next/link";
import PokeCard from "./poke-card";
import { PokeListPropTypes, PokemonListElementTypes } from "@/lib/definitions";

export default function PokeList({ data }: Readonly<PokeListPropTypes>) {
  return (
    <ul className="flex flex-wrap gap-5">
      {data?.map((pokemon: PokemonListElementTypes, index: number) => (
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

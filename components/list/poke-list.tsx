import Link from "next/link";
import PokeCard from "./poke-card";
export default function PokeList() {
  return (
    <ul className="flex flex-wrap gap-5">
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/5">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/6">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/7">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/8">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
      <li className="w-full sm:w-[48%] lg:w-[30%] 2xl:w-[22%]">
        <Link href="pokemon-detail/3">
          <PokeCard />
        </Link>
      </li>
    </ul>
  );
}

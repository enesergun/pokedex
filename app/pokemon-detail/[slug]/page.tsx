import React from "react";
import Image from "next/image";
import Link from "next/link";
import DetailContent from "@/components/detail/detail-content";
import { ArrowLeft } from "lucide-react";
import { fetchSinglePokemon } from "@/lib/data";
import type { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirstLetter } from "@/lib/utils";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const pokemon = await fetchSinglePokemon(slug);
  const title = capitalizeFirstLetter(pokemon.name);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title + " Detail",
    /* openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    }, */
  };
}
export default async function PokemonDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchSinglePokemon(params.slug);

  return (
    <main>
      <Link href="/">
        <ArrowLeft />
      </Link>
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + data?.id + ".svg"}
        alt="bulbasaur"
        width={125}
        height={125}
        className="mx-auto"
        loading="lazy"
      />
      <DetailContent data={data} />
    </main>
  );
}

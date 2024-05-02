import React from "react";
import Image from "next/image";
import Link from "next/link";
import DetailContent from "@/components/detail/detail-content";
import { ArrowLeft } from "lucide-react";
function PokemonDetail() {
  return (
    <main>
      <Link href="/">
        <ArrowLeft />
      </Link>
      <Image
        src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "12.svg"}
        alt="bulbasaur"
        width={175}
        height={175}
        className="mx-auto"
      />
      <DetailContent />
    </main>
  );
}

export default PokemonDetail;

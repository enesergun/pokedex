import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export type PokeCardPropTypes = {
  name: string;
  order: number;
};

export default function PokeCard({ name, order }: Readonly<PokeCardPropTypes>) {
  return (
    <Card className="min-h-56">
      <CardHeader className="pb-0">
        <CardTitle>{name}</CardTitle>
        <CardDescription>#{order}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL! + order + ".png"}
          alt="Pokemon Image"
          placeholder="empty"
          blurDataURL="/pokeball.webp"
          width={100}
          height={100}
          className="mx-auto"
        />
      </CardContent>
    </Card>
  );
}

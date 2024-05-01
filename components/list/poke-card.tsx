import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function PokeCard() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Bulbasaur</CardTitle>
        <CardDescription>#0001</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="bulbasaur"
          width={150}
          height={150}
          className="mx-auto"
        />
      </CardContent>
      <CardFooter className="flex-wrap gap-1">
        <Badge variant="fairy">Badge</Badge>
        <Badge variant="fairy">Badge</Badge>
      </CardFooter>
    </Card>
  );
}

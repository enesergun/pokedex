import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Pokemon, PokemonTypes } from "@/lib/definitions";
import { cva, type VariantProps } from "class-variance-authority";
import {
  combineData,
  decimeterToCentimeter,
  hectogramsToKilograms,
} from "@/lib/utils";

function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Separator />
    </>
  );
}
function DataItem({
  title,
  value,
  progress,
}: {
  title: string;
  value?: number | string;
  progress?: any;
}) {
  return (
    <div className="flex my-2">
      <span className="min-w-[60%] font-bold">{title}</span>
      {!progress && <span>{value}</span>}
      {progress && <Progress value={progress} aria-label={title} />}
    </div>
  );
}
function DetailContent({ data }: { data: Readonly<Pokemon> }) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{data?.name}</h1>
      <div className="flex gap-1 my-1">
        {data?.types.map((element) => (
          <Badge
            key={`data_${element.slot}`}
            variant={element?.type.name as any}
          >
            {element?.type.name}
          </Badge>
        ))}
      </div>

      <p className="my-1 text-lg text-gray-500">#{data?.id}</p>
      <section className="my-5">
        <SectionTitle title="About" />
        <ul className="mt-4">
          <li>
            <DataItem title="Base Experience" value={data?.base_experience} />
          </li>
          <li>
            <DataItem
              title="Abilities"
              value={combineData(data?.abilities, "ability", "name")}
            />
          </li>
          <li>
            <DataItem
              title="Height"
              value={`${decimeterToCentimeter(data?.height)} cm`}
            />
          </li>
          <li>
            <DataItem
              title="Weight"
              value={`${hectogramsToKilograms(data?.weight)} kg`}
            />
          </li>
        </ul>
      </section>
      <section className="my-5">
        <SectionTitle title="Stats" />
        <ul className="mt-4">
          {data?.stats.map((stat) => (
            <li key={`data_${stat?.stat?.name}`}>
              <DataItem title={stat?.stat?.name} progress={stat.base_stat} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default DetailContent;

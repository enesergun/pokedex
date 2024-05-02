import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Separator />
    </>
  );
}
function DataItem({ progress }: { progress?: any }) {
  return (
    <div className="flex my-2">
      <span className="w-3/5 font-bold">Height</span>
      {!progress && <span>40kg</span>}
      {progress && <Progress value={progress} />}
    </div>
  );
}
function DetailContent() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Bulbasaur</h1>
      <div className="flex gap-1 my-1">
        <Badge variant="fairy">Badge</Badge>
        <Badge variant="fairy">Badge</Badge>
      </div>

      <p className="my-1 text-lg text-gray-500">#0001</p>
      <section className="my-5">
        <SectionTitle title="About" />
        <ul className="mt-4">
          <li>
            <DataItem />
          </li>
          <li>
            <DataItem />
          </li>
          <li>
            <DataItem />
          </li>
        </ul>
      </section>
      <section className="my-5">
        <SectionTitle title="Stats" />
        <ul className="mt-4">
          <li>
            <DataItem progress={90} />
          </li>
          <li>
            <DataItem progress={50} />
          </li>
          <li>
            <DataItem progress={30} />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DetailContent;

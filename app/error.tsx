"use client";
import React from "react";
import { Button } from "@/components/ui/button";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="text-center	">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <Button className="mt-4" onClick={() => reset()}>
        Try Again!
      </Button>
    </div>
  );
}

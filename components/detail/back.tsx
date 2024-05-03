"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Back() {
  const router = useRouter();
  return <ArrowLeft className="cursor-pointer	" onClick={() => router.back()} />;
}

export default Back;

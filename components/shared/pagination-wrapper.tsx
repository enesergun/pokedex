"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
export default function PaginationWrapper({
  count,
  next,
  previous,
  currentPage,
}: {
  count: number;
  next: string;
  previous: string;
  currentPage: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (offsetNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", offsetNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(count, currentPage + 1);

    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key="data_1">
          <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <PaginationItem key="data_ellipses_0">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i !== count) {
        pageNumbers.push(
          <PaginationItem key={`data_${i}`}>
            <PaginationLink
              href={createPageURL(i)}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    if (currentPage < count - 2) {
      if (currentPage < count - 2) {
        pageNumbers.push(
          <PaginationItem key="data_ellipses_1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    pageNumbers.push(
      <PaginationItem key={`data_${count}`}>
        <PaginationLink
          href={createPageURL(count)}
          isActive={currentPage === count}
        >
          {count}
        </PaginationLink>
      </PaginationItem>
    );

    return pageNumbers;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            className={clsx(!previous && "pointer-events-none text-gray-300")}
          />
        </PaginationItem>
        {renderPageNumbers()}
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            className={clsx(!next && "pointer-events-none text-gray-300")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
/*  */

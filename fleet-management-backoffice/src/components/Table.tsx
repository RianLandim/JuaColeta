import {
  TableBody,
  TableHead,
  TableHeader,
  Table as TablePrimitive,
} from "@/components/ui/table";
import { Fragment, ReactNode } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";
import { useQueryParam } from "@/hooks/useQueryParam";

interface TableProps {
  headers: string[];
  rows: ReactNode | ReactNode[];
}

export function Table({ headers, rows }: TableProps) {
  const { createQueryString, searchParams } = useQueryParam();

  return (
    <Fragment>
      <TablePrimitive className="w-full rounded-md bg-slate-300">
        <TableHeader>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableHeader>
        <TableBody>{rows}</TableBody>
      </TablePrimitive>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                createQueryString([
                  {
                    name: "page",
                    value: String(Number(searchParams.get("page")) - 1),
                  },
                ])
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{searchParams.get("page")}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                createQueryString([
                  {
                    name: "page",
                    value: String(Number(searchParams.get("page")) + 1),
                  },
                ])
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Fragment>
  );
}

import { ColumnFiltersState, Updater } from "@tanstack/react-table";
import { useQueryParam } from "./useQueryParam";
import { usePathname, useRouter } from "next/navigation";

export function useTableFilter() {
  const { searchParams } = useQueryParam();

  const router = useRouter();
  const pathname = usePathname();

  const columnsFilter = Object.entries(searchParams).map(([key, value]) => ({
    id: key,
    value,
  }));

  const columnFilterChange = (updater: Updater<ColumnFiltersState>) => {
    const filters =
      typeof updater === "function" ? updater(columnsFilter) : updater;

    const params = new URLSearchParams();

    for (const filter of filters) {
      params.append(filter.id, String(filter.value));
    }

    void router.replace(pathname + "?" + params.toString());
  };

  return { columnsFilter, columnFilterChange };
}

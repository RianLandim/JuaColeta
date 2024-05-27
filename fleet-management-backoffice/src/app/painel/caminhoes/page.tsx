"use client";

import { DataTable } from "@/components/Table";
import { LoadingIndicator } from "@/components/ui/loadingIndicator";
import { Truck, useTruckList } from "@/hooks/queries/useTruck";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { match, P } from "ts-pattern";

const columnHelper = createColumnHelper<Truck>();

export default function Trucks() {
  const columns = useMemo(
    () => [
      columnHelper.accessor("model", {
        header: "Modelo",
      }),
    ],
    []
  );

  const truckQuery = useTruckList();

  return (
    <main>
      {match(truckQuery)
        .with({ isLoading: true }, () => <LoadingIndicator />)
        .with({ isError: true }, () => (
          <span>Ocorreu um erro ao buscar os veiculos</span>
        ))
        .with({ data: P.nullish }, () => <span>Nenhum veiculo encontrado</span>)
        .with({ data: P.not(undefined).and(P.not(P.nullish)) }, ({ data }) => (
          <DataTable columns={columns} data={data} />
        ))
        .exhaustive()}
    </main>
  );
}

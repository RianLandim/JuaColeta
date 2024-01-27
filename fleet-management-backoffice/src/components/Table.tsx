import {
  TableHead,
  TableHeader,
  Table as TablePrimitive,
} from "@/components/ui/table";

type Columns<TData> = {
  header: keyof TData;
};

interface TableProps<TData = unknown> {}

export function Table() {
  return (
    <TablePrimitive className="w-full rounded-md bg-slate-300">
      <TableHeader>
        <TableHead>Nome</TableHead>
      </TableHeader>
    </TablePrimitive>
  );
}

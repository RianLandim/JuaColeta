import { EditCompanyDialog } from "@/components/cadastros/empresa/EditCompanyDialog";
import { Header } from "./_components/header";
import { CompanyTable } from "./_components/table";

export default function CompanyRegister() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 id="title" className="self-start font-bold text-2xl">
        Empresas
      </h1>

      <EditCompanyDialog />

      <Header />

      <CompanyTable />
    </main>
  );
}

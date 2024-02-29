import { LoadingIndicator } from "@/components/ui/loadingIndicator";
import { UserHeader } from "./_components/header";
import { UsersTable } from "./_components/table";

export default function UsersPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-4 p-4">
      <h1 id="title" className="self-start font-bold text-2xl">
        Usuários
      </h1>

      <UserHeader />

      <UsersTable />
    </main>
  );
}

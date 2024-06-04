import { LayoutProps } from "@/utils/types/layoutProps";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autenticação",
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen bg-gps-pattern bg-black bg-opacity-90 bg-cover bg-center flex flex-row">
      <aside className="w-full  flex flex-col items-center justify-center text-white text-xl space-y-2">
        <Image width={250} height={250} src="/logo/logo.svg" alt="Logo" />
        <p className="max-w-md pt-8">
          Bem-vindo ao aplicativo oficial da{" "}
          <span className="text-main inline-block">JUAColeta!</span>
        </p>
        <p>O futuro da coleta de lixo em suas mãos</p>
      </aside>
      <div className="flex flex-col items-center justify-center p-4 w-3/4 h-screen">
        {children}
      </div>
    </main>
  );
}

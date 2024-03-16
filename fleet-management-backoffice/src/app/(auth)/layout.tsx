import { LayoutProps } from "@/utils/types/layoutProps";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autenticação",
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen bg-gps-pattern bg-black bg-opacity-90 bg-cover bg-center flex flex-row">
      <aside className="w-full  flex flex-col items-center justify-center space-y-12">
        <Image width={250} height={250} src="/logo/logo.png" alt="Logo" />
      </aside>
      <div className="flex flex-col items-center justify-center p-4 w-3/4 h-screen">
        {children}
      </div>
    </main>
  );
}

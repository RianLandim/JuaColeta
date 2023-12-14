import { LayoutProps } from "@/utils/types/layoutProps";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autenticação",
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="w-full flex flex-row">
      <aside className="w-full bg-primary flex flex-col items-center justify-center space-y-12">
        <Image width={250} height={250} src="/logo/bus.png" alt="Logo" />
        <h1 className="text-3xl font-bold text-white">Fleet Management</h1>
      </aside>
      <div className="bg-white flex flex-col items-center justify-center p-4 w-3/4 h-screen">
        {children}
      </div>
    </main>
  );
}

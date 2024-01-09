import { Sidebar } from "@/components/sidebar/Sidebar";
import { LayoutProps } from "@/utils/types/layoutProps";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel",
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen bg-slate-200">
      <Sidebar />
      {children}
    </main>
  );
}

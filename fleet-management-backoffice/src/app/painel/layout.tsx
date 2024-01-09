import { SideBar } from "@/components/sidebar/Sidebar";
import { LayoutProps } from "@/utils/types/layoutProps";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel",
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen bg-slate-200 flex flex-row">
      <SideBar />
      <div className="w-4/5 flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}

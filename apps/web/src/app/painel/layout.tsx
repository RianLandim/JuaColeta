import { SideBar } from "@/components/sidebar";
import { LayoutProps } from "@/utils/types/layoutProps";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Painel",
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <main className="w-full h-screen bg-main-dark/80">
      <div className=" flex flex-row relative z-10 ">
        <SideBar />
        <div className="w-4/5 flex flex-col items-center justify-center px-12">
          {children}
        </div>
        <Image
          src={"/backgroundLayoutLogo.svg"}
          alt=""
          height={800}
          width={800}
          className="absolute bottom-0 right-0 -z-10 "
        />
      </div>
    </main>
  );
}

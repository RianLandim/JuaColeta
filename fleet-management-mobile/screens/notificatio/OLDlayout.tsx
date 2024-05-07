import React from "react";
import { Fragment } from "react";
// import { LayoutProps } from "../../../../utils/types/layoutProps";

export const metadata = {
  title: "Painel",
};

export default function DashboardLayout({  }) {
  return (
    <main className="w-full h-screen bg-backgroundApp">
      <div className=" flex flex-row relative z-10 ">
        <div className="w-4/5 flex flex-col items-center justify-center">
          {}
        </div>
      </div>
    </main>
  );
}

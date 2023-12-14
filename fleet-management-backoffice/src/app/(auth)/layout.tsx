import { LayoutProps } from "@/utils/types/layoutProps";
import { ReactNode } from "react";

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="w-full flex flex-row">
      <aside className="w-full bg-primary"></aside>
      <div className="bg-white flex flex-col items-center justify-center p-4 w-3/4 h-screen">
        {children}
      </div>
    </main>
  );
}

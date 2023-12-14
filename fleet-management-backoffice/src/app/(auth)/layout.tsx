import { LayoutProps } from "@/utils/types/layoutProps";
import { ReactNode } from "react";

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <main className="w-full flex flex-row">
      <aside className="w-full"></aside>
      {children}
    </main>
  );
}

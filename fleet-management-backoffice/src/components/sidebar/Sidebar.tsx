"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { Clipboard, LucideIcon, AirVent } from "lucide-react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { UseSession } from "@/utils/providers/SessionProvider";

export function SideBar() {
  const { signOut } = UseSession();

  return (
    <aside className="bg-slate-400 w-1/5 p-4 flex items-center justify-around flex-col h-screen">
      <div className="">
        <Image
          width={100}
          height={50}
          alt="logo"
          src="/logo/bus.png"
          className="w-auto h-auto"
          priority
        />
      </div>
      <ProfileCard />
      <div className="w-full flex flex-col items-center justify-evenly space-y-4">
        <NavButton label="Empresa" href="painel/cadastros/empresa" />
        <NavButton label="Cadastros" href="painel/cadastro" icon={AirVent} />
      </div>

      <Button onClick={signOut}>Sair</Button>
    </aside>
  );
}

interface NavButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
}

function NavButton({ href, label, icon = Clipboard }: NavButtonProps) {
  const Icon = icon;

  return (
    <Link className="w-full" href={href}>
      <Button variant="ghost" className="w-full gap-4">
        <Icon />
        {label}
      </Button>
    </Link>
  );
}

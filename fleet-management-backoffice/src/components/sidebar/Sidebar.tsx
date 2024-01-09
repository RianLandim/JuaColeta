"use client";

import { useCurrentUser } from "@/hooks/queries/me";
import { match } from "ts-pattern";
import { Button } from "../ui/button";
import Link from "next/link";
import { Clipboard, LucideIcon, AirVent } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export function SideBar() {
  const currentUserQuery = useCurrentUser();

  return (
    <aside className="bg-slate-400 w-1/5 p-4 flex items-center justify-around flex-col h-screen">
      <div className="">
        <Image width={100} height={50} alt="logo" src="/logo/bus.png" />
      </div>
      {match(currentUserQuery)
        .with({ isLoading: true }, () => <Skeleton className="h-12 w-full" />)
        .with({ isError: true }, () => <></>)
        .otherwise(({ data }) => (
          <div className="bg-white w-full rounded-md p-2 flex items-center justify-center flex-col">
            <p>{data?.name}</p>
          </div>
        ))}
      <div className="w-full flex flex-col items-center justify-evenly space-y-4">
        <NavButton label="Cadastros" href="painel/cadastro" />
        <NavButton label="Cadastros" href="painel/cadastro" icon={AirVent} />
        <NavButton label="Cadastros" href="painel/cadastro" />
        <NavButton label="Cadastros" href="painel/cadastro" />
        <NavButton label="Cadastros" href="painel/cadastro" />
      </div>
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

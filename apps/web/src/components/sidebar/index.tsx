"use client";

import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { UseSession } from "@/utils/providers/SessionProvider";
import { NavButton } from "./NavButton";
import { Button } from "../../../../../packages/ui/./button";
import {
  LayoutGrid,
  Bell,
  Building2,
  User,
  Truck,
  Book,
  LogOut,
} from "lucide-react";
import { Setting } from "iconsax-react";

export function SideBar() {
  const { signOut, user } = UseSession();

  return (
    <aside className="bg-main-dark w-1/7 p-4 gap-4 flex items-center justify-evenly flex-col h-screen">
      <Image
        width={100}
        height={50}
        alt="logo"
        src="/landingPage/logoNavbar.svg"
        className="w-auto h-auto"
        priority
      />
      <div className="w-full flex flex-col gap-4 justify-self-start">
        <ProfileCard />
        <NavButton label="Página inicial" href="/painel" icon={LayoutGrid} />
        <NavButton
          label="Empresas"
          href="/painel/admin/empresa"
          icon={Building2}
          hidden={user.role !== "ADMIN"}
        />
        <NavButton
          label="Notificações"
          href="/painel/notificacoes"
          icon={Bell}
        />
        <NavButton
          label="Funcionários"
          href="/painel/funcionarios"
          icon={User}
        />
        <NavButton label="Caminhões" href="/painel/caminhoes" icon={Truck} />
        <div className="h-[1px] w-full bg-slate-600" />
        <div className="w-full flex items-center justify-between">
          <Button
            variant={"ghost"}
            onClick={signOut}
            className="w-full flex items-center p-2 justify-start bg-main-dark text-white hover:bg-main-dark-active hover:text-white rounded-md gap-4 text-base font-normal"
          >
            <LogOut className="h-6 w-6" />
            Sair
          </Button>
          <NavButton
            label="Configurações"
            href="/painel/configuracoes"
            icon={Setting}
          />
        </div>
      </div>
    </aside>
  );
}

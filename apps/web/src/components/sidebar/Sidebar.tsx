"use client";

import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { UseSession } from "@/utils/providers/SessionProvider";
import { SidebarItem } from "./SidebarItem";
import { Button } from "../ui/button";
import {
  Buildings,
  Home,
  Logout,
  Notification,
  Personalcard,
  Profile2User,
  Setting2,
  Truck,
} from "iconsax-react";

export function SideBar() {
  const { signOut, user } = UseSession();

  return (
    <aside className="bg-[#2C612C] w-1/6 py-4 flex items-center justify-around flex-col h-screen text-[18px]">
      <Image
        width={100}
        height={50}
        alt="logo"
        src="/landingPage/logoNavbar.svg"
        className="w-auto h-auto"
        priority
      />
      <ProfileCard />
      <div className="w-full flex flex-col space-y-4 justify-self-start">
        <SidebarItem
          label="Página inicial"
          href="/painel/pagina-inicial"
          icon={Home}
        />
        {user.role === "ADMIN" && (
          <SidebarItem
            label="Empresas"
            href="/painel/empresa"
            icon={Buildings}
          />
        )}
        <SidebarItem
          label="Notificações"
          href="/painel/notificacoes"
          icon={Notification}
        />
        <SidebarItem
          label="Funcionários"
          href="/painel/funcionarios"
          icon={Profile2User}
        />
        <SidebarItem label="Caminhões" href="/painel/caminhoes" icon={Truck} />
        <SidebarItem
          label="Perfil da Empresa"
          href="/painel/perfil-da-empresa"
          icon={Personalcard}
        />
        <SidebarItem
          label="Configurações"
          href="/painel/configuracoes"
          icon={Setting2}
        />

        <Button
          variant={"ghost"}
          onClick={signOut}
          className="w-full flex items-center py-7 px-8 justify-evenly hover:bg-primary-main/60"
        >
          <Logout className="h-10 w-10" />
          Sair
        </Button>
      </div>
    </aside>
  );
}

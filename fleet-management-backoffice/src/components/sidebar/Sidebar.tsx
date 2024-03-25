"use client";

import { ButtonSidebar } from "../ui/button-sidebar";
import {
  Home,
  Sliders,
  Briefcase,
  Truck,
  BellDot,
  LogOutIcon,
  Contact2,
} from "lucide-react";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { UseSession } from "@/utils/providers/SessionProvider";
import { SidebarItem } from "../ui/sidebarItem";

export function SideBar() {
  const { signOut } = UseSession();

  return (
    <aside
      className="bg-[#2C612C] w-1/5 py-4 flex items-center 
    justify-around flex-col h-screen text-[18px]"
    >
      <Image
        width={100}
        height={50}
        alt="logo"
        src="/landingPage/logoNavbar.svg"
        className="w-auto h-auto"
        priority
      />
      <ProfileCard />
      <div className="w-full flex flex-col space-y-4 justify-self-start ">
        <SidebarItem label="Página inicial" href="/" icon={Home} />
        <SidebarItem
          label="Notificações"
          href="/cadastros/usuarios"
          icon={BellDot}
        />
        <SidebarItem label="Funcionários" href="" icon={Contact2} />
        <SidebarItem label="Caminhões" href="" icon={Truck} />
        <SidebarItem label="Perfil da Empresa" href="" icon={Briefcase} />
        <SidebarItem label="Configurações" href="" icon={Sliders} />

        <div className="w-full bg-[#203f20]/50  justify-center flex h-full">
          <ButtonSidebar
            variant={"ghost"}
            onClick={signOut}
            className="w-full flex items-center gap-4 py-7 px-8"
          >
            <LogOutIcon className="h-10 w-10" />
            Sair
          </ButtonSidebar>
        </div>

      </div>
    </aside>
  );
}

// interface NavButtonProps {
//   href: string;
//   label: string;
//   icon?: LucideIcon;
//   iconHeight?: string;
// }

// function NavButton({ href, label, icon }: NavButtonProps) {
//   const Icon = icon;

//   return (
//     <Link className="w-full h-full" href={href}>
//       <ButtonSidebar variant="ghost" className="w-full flex items-center gap-4 py-7 px-8">
//         {Icon && <Icon className={`h-10 w-10`} />}
//         {label}
//       </ButtonSidebar>
//     </Link>
//   );
// }

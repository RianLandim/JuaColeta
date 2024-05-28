import { LucideIcon } from "lucide-react";
import { ButtonSidebar } from "./button-sidebar";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  iconHeight?: string;
}

export const SidebarItem = ({ label, icon, href }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className={isActive ? (`w-full bg-[#203f20]/50 flex`) : ('w-full flex')}>
      <div className={isActive ? (`w-2 h-full bg-main`) : ('')}></div>
      <NavButton label={label} icon={icon} href={href} />
    </div>
  );
};

SidebarItem.displayName = "Button";

function NavButton({ href, label, icon }: NavButtonProps) {
  const Icon = icon;

  return (
    <Link className="w-full h-full" href={href}>
      <ButtonSidebar
        variant="ghost"
        className="w-full flex items-center gap-4 py-7 px-8"
      >
        {Icon && <Icon className="h-10 w-10" />}
        {label}
      </ButtonSidebar>
    </Link>
  );
}

export default NavButton;

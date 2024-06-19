import { Icon } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import clsx from "clsx";

interface NavButtonProps {
  href: string;
  label: string;
  icon?: Icon;
  iconHeight?: string;
}

export const SidebarItem = ({ label, icon, href }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={clsx("w-full flex ", {
        "bg-primary-main/60": isActive,
      })}
    >
      <div className={isActive ? `w-2 h-full bg-main` : ""}></div>
      <NavButton label={label} icon={icon} href={href} />
    </div>
  );
};

SidebarItem.displayName = "Button";

function NavButton({ href, label, icon }: NavButtonProps) {
  const Icon = icon;

  return (
    <Link className="w-full h-full" href={href}>
      <Button
        variant="ghost"
        className="w-full flex items-center py-7 px-8 justify-evenly hover:bg-primary-main/60"
      >
        {Icon && <Icon className="h-9 w-9" variant="Bulk" />}
        {label}
      </Button>
    </Link>
  );
}

export default NavButton;

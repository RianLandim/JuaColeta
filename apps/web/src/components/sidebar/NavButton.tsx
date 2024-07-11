import { LucideIcon } from "lucide-react";
import { Icon } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  href: string;
  label: string;
  icon: LucideIcon | Icon;
  iconHeight?: string;
  hidden?: boolean;
}

export function NavButton({
  href,
  label,
  icon,
  hidden = false,
}: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const Icon = icon;

  return (
    <Link
      className="w-full flex items-center p-2 justify-start bg-main-dark text-white hover:bg-main-dark-active rounded-md gap-4 data-[active=true]:bg-main-dark-active"
      data-active={isActive}
      hidden={hidden}
      href={href}
    >
      <Icon className="h-6 w-6" />
      {label}
    </Link>
  );
}

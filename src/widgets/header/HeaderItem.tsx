"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";

interface Props {
  item: {
    label: string;
    href: string;
  };
  closeSheet?: boolean;
}

export default function HeaderItem({ item, closeSheet }: Props) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(`${item.href}/`));

  const link = (
    <Link
      href={item.href}
      className={`flex w-full lg:w-fit px-3 py-1.5 text-base md:text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? "text-foreground bg-foreground/10"
          : "text-muted-foreground hover:text-foreground hover:bg-foreground/10"
      }`}
    >
      {item.label}
    </Link>
  );

  return closeSheet ? <SheetClose asChild>{link}</SheetClose> : link;
}

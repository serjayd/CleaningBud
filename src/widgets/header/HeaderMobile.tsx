import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import QuoteButton from "@/features/quote/ui/QuoteButton";
import { Menu } from "lucide-react";
import HeaderItem from "./HeaderItem";
import { HEADER_LINKS } from "@/constants/header.data";

export default function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon-lg" variant="secondary" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-border">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4">
            <ul className="flex flex-col items-start gap-2">
              {HEADER_LINKS.map((item) => (
                <li key={item.label} className="w-full">
                  <SheetClose asChild>
                    <HeaderItem item={item} closeSheet />
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-4">
            <QuoteButton widthFull />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

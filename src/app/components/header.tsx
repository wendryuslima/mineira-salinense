"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="">
        <h1 className="text-2xl font-semibold text-[#FFD700]">
          Mineira Salinense
        </h1>
      </div>

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col space-y-4 p-4">
            <Link className="hover:underline" href="#about">
              Sobre nós
            </Link>
            <Link className="hover:underline" href="#about">
              Produtos
            </Link>
            <Link className="hover:underline" href="#about">
              Avaliações
            </Link>
            <Link className="hover:underline" href="#about">
              Contatos
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;

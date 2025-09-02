"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenuClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex items-center justify-between border border-b p-4">
      <div className="">
        <h1 className="text-2xl font-semibold text-[#FFD700] uppercase">
          Mineira Salinense
        </h1>

        <span className="rounde-xl border-b border-zinc-400 text-sm text-white">
          Cachaça artesanal
        </span>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div
            onClick={handleCloseMenuClick}
            className="flex flex-col space-y-4 p-4"
          >
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

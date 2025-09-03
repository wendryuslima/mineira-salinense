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

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="">
        <h1 className="text-2xl leading-2 font-semibold text-[#FFD700] uppercase">
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

          <div className="flex flex-col space-y-4 p-4">
            <a
              className="hover:underline"
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
            >
              Sobre nós
            </a>
            <a
              className="hover:underline"
              href="#products"
              onClick={(e) => handleLinkClick(e, "#about")}
            >
              Produtos
            </a>
            <a
              className="hover:underline"
              href="#depoiments"
              onClick={(e) => handleLinkClick(e, "#depoiments")}
            >
              Avaliações
            </a>
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

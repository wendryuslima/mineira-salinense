import { ArrowUp, InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-[1200px] border-t bg-zinc-950 p-4 md:px-0">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <p className="font-semibold">Mineira Salinense </p>
            <p className="text-xs text-zinc-400">
              © Todos os direiros reservados
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2 lg:items-center lg:gap-4">
          <div className="items-center">
            <Link
              className="mt-4"
              href="https://www.instagram.com/mineirasalinense?igsh=ZDJlMDk0dXlhMW16"
            >
              <InstagramIcon size={18} />
            </Link>
            <div className="hidden items-center gap-2 lg:flex">
              <p>mineirasalinense@hotmail.com</p>
            </div>
          </div>

          <a
            className="flex items-center text-xs text-zinc-400 transition-colors hover:text-zinc-50 hover:underline hover:underline-offset-4 md:text-sm"
            href="#home"
          >
            Voltar para o topo <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

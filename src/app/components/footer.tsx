import { ArrowUpIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 flex w-full items-center justify-between gap-6 border-t px-4 text-white">
      <div className="p-4">
        <p className="text-zinc-400">Mineira Salinense</p>
        <p>mineirasalinense@hotmail.com</p>
        <p className="text-sm text-zinc-400">
          © 2025 Todos os direiros reservados
        </p>
      </div>

      <div className="flex flex-col items-center">
        <a href="#home" className="flex items-center gap-2 text-zinc-500">
          Voltar ao topo
          <ArrowUpIcon size={18} />
        </a>
        <Link
          className="mt-4"
          href="https://www.instagram.com/mineirasalinense?igsh=ZDJlMDk0dXlhMW16"
        >
          <InstagramIcon size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

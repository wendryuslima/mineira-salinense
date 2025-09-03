import { InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 border border-t px-4 text-white">
      <Link
        className="mt-4"
        href="https://www.instagram.com/mineirasalinense?igsh=ZDJlMDk0dXlhMW16"
      >
        <InstagramIcon />
      </Link>
      <p className="text-zinc-400">mineirasalinense@outlook.com</p>
      <p className="text-sm">© 2025 Todos os direiros reservados</p>
    </div>
  );
};

export default Footer;

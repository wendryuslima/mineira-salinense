import Image from "next/image";

import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Main = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col items-center gap-2 p-4"
      >
        <h2 className="text-center text-2xl font-bold text-white uppercase">
          Descubra a essência da cachaça mineira
        </h2>
        <h1 className="text-center text-gray-300">
          Da tradição mineira nasce o sabor autêntico da cachaça artesanal.
          Mineira Salinense: feita com alma, história e qualidade que atravessa
          gerações
        </h1>
        <Image
          data-aos="fade-left"
          src="/background-mineira-removebg-preview.png"
          width={200}
          height={200}
          alt=""
        />

        <div className="mt-4 flex items-center gap-4">
          <Link href="#about" className="">
            <Button variant="outline" className="text-white">
              Saiba mais
            </Button>
          </Link>
          <Button className="text-black">Peça agora</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;

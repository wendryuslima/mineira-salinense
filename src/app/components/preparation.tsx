"use client";
import Image from "next/image";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Preparation = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-36 flex flex-col justify-center gap-8 overflow-hidden p-4">
      <div data-aos="fade-left" className="mx-auto mb-4 text-center">
        <h2 className="">Como nossas cachaças são preparadas?</h2>
      </div>
      <div data-aos="fade-up" className="space-y-4">
        <p className="text- sm text-center text-gray-300">
          A cachaça mineira artesanal é feita de forma tradicional, com um
          processo cuidadoso que valoriza o sabor e a qualidade. Primeiro, a
          cana-de-açúcar é colhida e moída para extrair o caldo, que passa por
          uma fermentação natural em dornas de madeira ou inox, geralmente com
          leveduras nativas.{" "}
        </p>

        <p className="mt-8 text-center text-gray-300">
          Em seguida, o líquido fermentado é destilado em alambiques de cobre, o
          que garante aromas mais finos e um sabor característico. Depois da
          destilação, a cachaça é armazenada para “curtir” por meses ou até anos
          em tonéis de madeira, como bálsamo, amburana ou carvalho, que conferem
          coloração, aromas e notas especiais à bebida.{" "}
        </p>
      </div>

      <div data-aos="fade-up" className="relative h-[300px] w-full">
        <Image
          src="/envelhecimento.jpg"
          alt="envelheciemento"
          className="rounded-lg object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default Preparation;

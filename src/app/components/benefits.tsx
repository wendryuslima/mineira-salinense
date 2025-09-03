"use client";
import { BottleWine, Martini } from "lucide-react";

import "aos/dist/aos.css";
import Image from "next/image";
import { benefits } from "../utils/benefits";

const Benefits = () => {
  return (
    <div
      id="products"
      className="flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <div data-aos="fade-up" className="flex p-4">
        <Martini size={35} />
        <BottleWine size={35} />
      </div>

      <div data-aos="fade-left" className="text-center">
        <h2 data-aos="fade-right">Descubra os benefícios da nossa cachaça</h2>
        <div className="mt-8">
          <p className="p-4 text-zinc-400">
            Nossa cachaça artesanal é feita co, ingredientes selecionados,
            garantindo um sabor autêntico e inigualável. Cada garrafa reflete a
            tradição mineira;
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="mt-12 grid grid-cols-2 gap-4 px-4">
        <div className="relative h-40 w-40 p-4">
          <Image
            className="rounded-lg object-cover"
            src="/mineira-salinense-1.jpg"
            alt="m-1"
            fill
          />
        </div>
        <div className="relative h-40 w-40">
          <Image
            className="rounded-lg object-cover"
            src="/mineira-salinense-2.jpg"
            alt="m-2"
            fill
          />
        </div>
        <div className="relative h-40 w-40">
          <Image
            className="rounded-lg object-cover"
            src="/m-s-5.jpg"
            alt="m-3"
            fill
          />
        </div>
        <div className="relative h-40 w-40">
          <Image
            className="rounded-lg object-cover"
            src="/mineira-salinense-4.jpg"
            alt="m-4"
            fill
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="mt-12 flex flex-col items-center justify-center gap-12"
      >
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <p className="flex gap-2 text-xl font-semibold">
              {benefit.icon && <benefit.icon size={20} color="yellow" />}
              {benefit.name}
            </p>
            <p className="text-center text-sm text-zinc-400">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

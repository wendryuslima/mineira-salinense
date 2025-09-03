"use client";

import { DepoimentsComponent } from "../utils/depoiments";

import "aos/dist/aos.css";

const Depoiments = () => {
  return (
    <div
      id="depoiments"
      className="mt-24 flex flex-col items-center justify-center gap-6 p-4"
    >
      <div data-aos="fade-right" className="">
        <div className="flex items-center justify-center gap-4">
          <h2 className="">Depoimento de clientes</h2>
        </div>
        <p className="mt-4 text-center text-gray-300">
          E para mostar que não fica somente em nossas palavras, temos
          avaliações de diversos clientes satisfeitos.
        </p>
      </div>

      <div data-aos="fade-left" className="flex flex-col gap-4">
        {DepoimentsComponent.map((depoiment, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-700 p-4"
          >
            <depoiment.Icon />
            <p>{depoiment.depoiment}</p>
            <span className="mt-2 font-bold">{depoiment.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Depoiments;

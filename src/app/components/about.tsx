"use client";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div id="about" className="mt-24 overflow-hidden px-4">
      <h2
        data-aos="fade-up"
        className="mb-4 flex justify-center text-4xl font-bold"
      >
        Sobre Nós
      </h2>
      <div className="">
        <div className="space-y-6 p-6">
          <div
            data-aos="fade-left"
            className="items-center space-y-4 text-center"
          >
            <h3 className="text-2xl leading-1 font-semibold uppercase">
              Mineira Salinense
            </h3>
            <p className="text-lg leading-relaxed">
              Com mais de{" "}
              <span className="font-semibold text-yellow-300">
                15 anos de experiência
              </span>{" "}
              no mercado, a Mineira Salinense se consolidou como uma das
              principais referências no ABC Paulista, oferecendo soluções de
              qualidade e excelência em todos os nossos serviços.
            </p>
            <p className="text-lg leading-relaxed">
              Nossa trajetória é marcada pelo compromisso com a qualidade,
              inovação e satisfação total dos nossos clientes, construindo
              relacionamentos duradouros baseados na confiança e resultados
              excepcionais.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-4">
        <div
          data-aos="fade-left"
          data-aos-delay="0"
          className="bg-background rounded-lg border p-4 text-center"
        >
          <div className="mb-1 text-2xl font-bold text-yellow-300">15+</div>
          <div className="text-sm text-white">Anos de Experiência</div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="bg-background rounded-lg border p-4 text-center"
        >
          <div className="mb-1 text-2xl font-bold text-yellow-300">ABCD</div>
          <div className="text-sm text-white">Referência Regional</div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="bg-background justify-center rounded-lg border p-4 text-center"
        >
          <div className="mb-1 text-2xl font-bold text-yellow-300">500 +</div>
          <div className="text-sm text-white">Clientes por todo ABCD</div>
        </div>
      </div>
    </div>
  );
};

export default About;

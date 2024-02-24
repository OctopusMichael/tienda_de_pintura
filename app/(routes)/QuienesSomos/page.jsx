import React from "react";
import equipo from "@/app/json/QuienesSomos.json";
import Card from "@/app/components/Card";

const page = () => {
  return (
    <section className=" container mt-5 flex flex-col gap-10 p-5 md:p-0">
      <div className="flex flex-col gap-5  items-center justify-center p-2">
        <img
          className="rounded-xl aspect-[1134/425] w-full max-w-[1300px] h-auto" 
          src="images/QuienesSomos/grupal.jpg"
          alt="foto grupal"
        />
        <h1 className="text-blue-500  text-[28px] font-bold md:text-4xl ">
          Sobre Nosotros
        </h1>
        <p className=" md:w-[1000px] text-center">
          En [Nombre de la Marca], nos dedicamos apasionadamente a la
          excelencia, comprometidos con la innovación y la calidad que nos
          mantiene a la vanguardia en la industria. Cada día, trabajamos
          incansablemente para ofrecer productos que superen las expectativas,
          reflejando nuestro compromiso con la satisfacción de nuestros clientes
          y la búsqueda constante de la perfección. Con un enfoque centrado en
          la calidad y la innovación, [Nombre de la Marca] es la elección
          confiable para aquellos que buscan soluciones excepcionales.
        </p>
      </div>
      <div className=" flex flex-col  items-center  text-center">
        <h1 className="text-[28px] font-bold md:text-4xl text-blue-500 ">
          Nuestro Equipo
        </h1>
        <p className="">
          Contamos con un equipo excepcional, compuesto por individuos
          confiables y de alta calidad
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10  mb-10 z-10 ">
          {equipo.map((e) => (
            <Card key={e.id} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

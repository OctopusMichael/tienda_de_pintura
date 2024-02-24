import React from "react";
import linea from "@/app/json/lineaIndustrial.json";
import ScrollToTop from "@/app/components/ScrollToTop";

const page = () => {
  return (
    <section className="container flex flex-col justify-center">
      <ScrollToTop />
      <img
        className="w-[100%] aspect-auto max-w-[1440px]    h-auto mx-auto "
        src="images/lineaIndustrial/header.png"
        alt="banner top"
      />

      <div className="flex md:flex-row flex-col gap-5  justify-center items-center  my-5 p-5 md:p-0">
        <img
          className="w-[300px]  h-auto"
          src="images/listaDeProductos/linea-industrial.png"
          alt="Linea Industrial"
        />
        <p className="md:w-[500px] text-center md:text-start ">
          Oxi-Flex es nuestra línea de productos para aplicaciones industriales
          y mantenimientos locativos. Comprende los productos para la protección
          de superficies metálicas ferrosas y el acabado colorizado para las
          mismas. Su uso puede ser domestico e industrial, se recomienda aplicar
          como acabado nuestro esmalte de la línea Decor-Flex.
        </p>
      </div>
      <hr />
      {linea.map((e) => (
        <section key={e.id}>
          <img
            className="w-[80%] h-auto mx-auto mt-5"
            src={e.linea}
            alt={e.linea}
          />
          <hr />
        </section>
      ))}
    </section>
  );
};

export default page;

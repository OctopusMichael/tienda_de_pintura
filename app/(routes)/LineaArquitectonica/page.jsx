import React from "react";
import linea from "@/app/json/lineaArquitectonica.json";
import ScrollToTop from "@/app/components/ScrollToTop";

const page = () => {
  return (
    <section className="container flex flex-col justify-center">
      <ScrollToTop />
      <img
        className="w-full max-w-[1440px] aspect-[91/22]"
        src="images/lineaArquitectonica/header.jpg"
        alt="banner top"
      />

      <div className="flex md:flex-row flex-col gap-5  justify-center items-center  my-5 p-5 md:p-0 ">
        <img
          className="w-[300px]  h-auto aspect-auto"
          src="images/listaDeProductos/linea-arquitectonica.png"
          alt="Linea arquitectonica"
        />
        <p className=" md:w-[500px] text-center md:text-start ">
          Decor-Flex es nuestra línea arquitectónica, ideal para el uso
          doméstico y la construcción. Son productos formulados a base de
          resinas vinil-acrílicas de alto desempeño, lo que les confiere
          características que agregan belleza y protección a tus espacios.
          Poseemos una gran variedad de colores, que ofrecen una terminación
          semimate.
        </p>
      </div>
      <hr />
      {linea.map((e) => (
        <section key={e.id}>
          <img
            className="w-[100%] md:w-[80%] h-auto mx-auto mt-5 aspect-auto"
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

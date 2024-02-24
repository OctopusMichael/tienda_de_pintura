import React from "react";
import linea from "@/app/json/lineaMadera.json";
import ScrollToTop from "@/app/components/ScrollToTop";

const page = () => {
  return (
    <section
      id="catalogoMadera"
      className="container flex flex-col justify-center "
    >
      <ScrollToTop />
      <img
        className="aspect-[39/10] max-w-[1440px] w-full h-auto"
        src="images/lineaDeMadera/header.jpg"
        alt="banner top"
      />
      {/* <h1 className="text-center text-[28px] text-blue-500 md:text-4xl  p-5 font-bold mt-5">
        LÍNEA PARA MADERA{" "}
      </h1> */}
      <div className="flex md:flex-row flex-col gap-5  justify-center items-center  mb-y p-5 md:p-0 ">
        <img
          className="w-[300px]  h-auto "
          src="images/listaDeProductos/linea-Madera.png"
          alt="Linea arquitectonica"
        />
        <p className=" text-center md:text-start md:w-[500px] ">
          Mader-Flex es nuestra línea de pinturas catalizadas para madera, uno
          de nuestros productos estrella de nuestra compañía y en la que
          encontrarás una gran variedad de productos para el embellecimiento de
          la madera. Son productos 100% colombianos, que elaboramos con materias
          primas certificadas por nuestros proveedores, que cumplen con todos
          los parámetros de calidad y que son la solución a la necesidad de tu
          negocio.
        </p>
      </div>
      <hr />

      {linea.map((e) => (
        <img
          key={e}
          className="w-[100%] aspect-auto max-w-[1440px]   md:w-[80%] h-auto mx-auto mt-5"
          src={e.linea}
          alt={e.linea}
        />
      ))}
    </section>
  );
};

export default page;

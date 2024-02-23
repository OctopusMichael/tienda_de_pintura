import React from "react";
import lineas from "../json/lineaDeProducto.json";

import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";

const LineaDeProductos = () => {
  return (
    <>
      <section className="container mt-10 flex flex-col gap-5 p-5 ">
        <h1 className="text-blue-500 text-[28px] md:text-4xl font-bold text-center">
          Nuestras Líneas de productos
        </h1>
        <article className="flex flex-col md:flex-row md:gap-5  gap-7  justify-center ">
          {lineas.map((e) => (
            <div
              key={e.id}
              className="hover:bg-slate-300 flex flex-col gap-5 rounded-xl p-10 transition-all ease-in-out duration-150  shadow-xl "
            >
              <img src={e.linea} alt="Linea" />
              <Link
                href={e.route}
                className="bg-blue-500  rounded-xl p-5 text-white font-bold  flex gap-2 justify-center btn-hover"
              >
                Catalogo <ArrowUpRightFromSquare />
              </Link>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default LineaDeProductos;

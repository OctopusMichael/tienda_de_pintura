import React from "react";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

const QuienesSomos = () => {
  return (
    <section className="mt-10 container grid grid-cols-1 md:grid-cols-2  gap-10  p-5 ">
      <article className="text-black flex flex-col gap-5 p-5 justify-center md:order-1 order-2 ">
        <h1 className=" text-[28px] md:text-4xl font-bold text-blue-500">
          Siempre Innovando...
        </h1>
        <p className="">
          Siempre a la vanguardia de la innovación y calidad, somos líderes en
          la distribución de barnices y anticorrosivos, ofreciendo una amplia
          gama de productos que se adaptan a las necesidades específicas de su
          proyecto. Nos destacamos por comprender a fondo todos los procesos de
          tratamiento, aplicación y acabado de superficies, lo que nos permite
          proporcionar soluciones excepcionales. Ya sea que necesite productos
          en diferentes tamaños o una variada paleta de colores, estamos
          comprometidos a brindarle los materiales ideales para el desarrollo
          exitoso de sus proyectos. Contamos con la experiencia y la variedad de
          productos que garantizan resultados superiores y duraderos.
        </p>
      </article>
      <img
        className="rounded-3xl md:order-2 order-1 "
        src="images/new.jpg"
        alt="imagen de prueba"
      />
      <img
        className="rounded-3xl md:order-3 order-3 "
        src="images/new.jpg"
        alt="imagen de prueba"
      />
      <article className="text-black flex flex-col gap-5 p-5 justify-center md:order-4 order-4">
        <h1 className="text-[28px] md:text-4xl font-bold text-blue-500">Quienes Somos</h1>
        <p>
          En [Nombre de la Marca], nos dedicamos apasionadamente a la
          excelencia, comprometidos con la innovación y la calidad que nos
          mantiene a la vanguardia en la industria. Cada día, trabajamos
          incansablemente para ofrecer productos que superen las expectativas,
          reflejando nuestro compromiso con la satisfacción de nuestros clientes
          y la búsqueda constante de la perfección. Con un enfoque centrado en
          la calidad y la innovación, [Nombre de la Marca] es la elección
          confiable para aquellos que buscan soluciones excepcionales.
        </p>
        <Link
          href={"/QuienesSomos"}
          className="bg-blue-500  rounded-xl p-5 text-white font-bold  flex gap-2 justify-center w-[200px] btn-hover "
        >
          Leer mas.
          <ArrowUpRightFromSquare />
        </Link>
      </article>
    </section>
  );
};

export default QuienesSomos;

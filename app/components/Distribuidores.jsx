import React from "react";
import logos from "../json/logos.json";

const Distribuidores = () => {
  return (
    <>
      <section className=" container flex flex-col gap-5 my-10 p-5 md:p-0">
        <div>
          <h1 className="text-center text-blue-500 text-[28px] text-4xl font-bold">
            Somos distribuidores
          </h1>
          <p className="text-center text-gray-400">De marcas garantizadas</p>
        </div>

        <div className=" mt-5 h-auto md:h-[200px] rounded-xl  bg-[#E2E2E0] flex md:flex-row flex-col p-[40px]  items-center  justify-center gap-10 ">
          {logos.map((e) => (
            <img
              className="w-auto h-full btn-hover"
              key={e.id}
              src={e.logos}
              alt={e.logos}
            />
          ))}
        </div>
      </section>
      
      <img
        className="container"
        src="images/banner/bannerCierre.jpg"
        alt="Banner de cierre."
      />
    </>
  );
};

export default Distribuidores;

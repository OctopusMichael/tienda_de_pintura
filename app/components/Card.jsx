import React from "react";

const Card = ({ e }) => {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 z-50 btn-hover">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16  rounded-full overflow-hidden  ">
        <img className=" " src={e.avatar} alt="Team  looking front" />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{e.name}</h2>
        <p className="text-gray-500">{e.titulo}</p>
      </div>

      <div className="p-4 border-t mx-8 mt-2 flex flex-col gap-2">
        <h2>
          {" "}
          <span className="font-bold">Direccion: </span> {e.direccion}
        </h2>
        {e.ws ? (
          <h2 className="text-black font-bold">
            {" "}
            <span className="font-bold">Whatsapp: </span> {e.ws}{" "}
          </h2>
        ) : (
          <h2>
            {" "}
            <span className="font-bold">Telefono:</span> {e.telefono}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Card;
/* 
"direccion": " Bolívar (San Juan, San Jacinto, Carmen de Bolívar, Magangué) y Barranquilla.",
    "ws": "3045336583",
    "name": "Isaac Martínez",
    "email": "imartinez@ipcmaderflex.com" */

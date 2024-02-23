"use client";

import React, { useState } from "react";

const Ws = () => {
  const [ws, setWs] = useState(false);

  const handleWs = () => {
    setWs(!ws);
  };
  return (
    <section className="flex items-center gap-5">
      {ws && (
        <p className="bg-green-500 rounded-xl p-5 fixed bottom-3 right-[80px] -z-[-10] text-white font-bold btn-hover">
          Chatea con nosotros!
        </p>
      )}
      <a
        onMouseOver={() => setWs(true)}
        onMouseOut={() => setWs(false)}
        href="https://api.whatsapp.com/send?phone=573216948469&text=Hola%2C%20estoy%20interesado%20en%20tus%20productos%2C%20me%20podrias%20dar%20mas%20informacion.%20😀"
        target="_blank"
        className="scale-100 fixed bottom-5 right-5 -z-[-10] btn-hover hover:scale-150"
      >
        <img src="/images/ws.svg" alt="ws icon" />
      </a>
    </section>
  );
};

export default Ws;

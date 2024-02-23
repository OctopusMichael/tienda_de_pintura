import SwiperComponent from "./components/SwiperComponent";
import Banner from "./components/Banner";
import LineaDeProductos from "./components/LineaDeProductos";
import Distribuidores from "./components/Distribuidores";

import QuienesSomos from "./components/QuienesSomos";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
      <Banner />

      <QuienesSomos />

      <SwiperComponent />

      <LineaDeProductos />

      <Distribuidores />
    </>
  );
}

"use client";

import { register } from "swiper/element/bundle";
register();

import pinturas from "../json/pinturas.json";
import useWindowSize from "../hook/useWindowSize";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const SwiperComponent = () => {
  const [carga, setCarga] = useState(true);
  const { view } = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setCarga(false);
    }, 2000);
  }, []);

  return (
    <>
      {carga ? (
        <Loading />
      ) : (
        <section className="max-w-[1440px]  mx-auto h-auto  overflow-hidden p-0 md:p-0 ">
          <swiper-container
            slides-per-view={view}
            loop="infinite"
            pagination="true"
            Autoplay
            navigation={true}
          >
            {pinturas.map((e) => (
              <swiper-slide key={e.id}>
                <img
                  className="cursor-pointer w-auto h-auto  md:rounded-[25px] p-0  md:p-5 md:my-5 "
                  src={e.title}
                  alt=""
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </section>
      )}
    </>
  );
};

export default SwiperComponent;

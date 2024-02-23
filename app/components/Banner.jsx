"use client";
import React from "react";
import banner from "../json/banner.json";
import { register } from "swiper/element/bundle";
register();

const Banner = () => {
  return (
    <>
      <section className="md:w-[1440px] mx-auto  bg-black h-[60px]  md:h-[24vh]  overflow-y-hidden   ">
        <swiper-container
          slides-per-view="1"
          loop="infinite"
          pagination="true"
          Autoplay
          
        >
          {banner.map((e) => (
            <swiper-slide key={e.id}>
              <img className="w-[400px] md:w-full cursor-pointer  " src={e.banner} alt="" />
            </swiper-slide>
          ))}
        </swiper-container>
      </section>
    </>
  );
};

export default Banner;

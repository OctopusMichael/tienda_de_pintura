"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import useWindowSize from "../hook/useWindowSize";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();
  const [navMenuMobile, setNavMenuMobile] = useState(false);
  const { view, width } = useWindowSize();

  const handleClick = () => {
    setNavMenu(!navMenu);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    //console.log(window.scrollY);
    if (scrollTop > 400) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const handleMenuMobile = () => {
    setNavMenuMobile(!navMenuMobile);
    setNavMenu(false)
    
  };

  const handleMenu = () => {
    setNavMenu(false);
    setNavMenuMobile(false);
  };

  useEffect(() => {
    window.onscroll = handleScroll;
    if (width < 1242) {
      setNavMenu(false);
      setNavMenuMobile(false);
    }
  }, [width]);

  const menu = [
    {
      id: 0,
      section: "Inicio",
      route: "/",
    },
    {
      id: 1,
      section: "Quienes Somos",
      route: "/QuienesSomos",
    },
    {
      id: 2,
      section: "Nuestros Productos",
      route: [],
    },
    {
      id: 3,
      section: "Contactenos",
      route: "/Contactenos",
    },
  ];

  const lineas = [
    {
      id: 0,
      route: "/LineaDeMadera",
      titulo: "Línea Para Madera",
    },
    {
      id: 1,
      route: "/LineaArquitectonica",
      titulo: "Línea Arquitectónica",
    },
    {
      id: 2,
      route: "/LineaIndustrial",
      titulo: "Línea Industrial",
    },
  ];

  return (
    <section className={`w-full mx-auto flex justify-between`}>
      <nav
        className={`${
          showNavbar ? "text-black" : "btn text-black"
        } flex items-center   justify-between lg:px-[260px]   p-10  font-bold fixed  w-screen z-50  h-[10vh] transition-all delay-75 `}
      >
        <a className="text-5xl text-blue-400" href="#">
          logo{" "}
        </a>
        {/********************/}
        {/* //?  Menu mobile  /}
        {/********************/}

        <button className="lg:hidden block" onClick={handleMenuMobile}>
          {navMenuMobile ? <X /> : <Menu />}
        </button>
        {navMenuMobile && (
          <div className=" md:hidden bg-gradient-to-r from-cyan-500 to-blue-500  w-[60%]  h-auto  p-5 absolute top-[100px] right-5  rounded-xl shadow-xl border-gray-200 border-2 ">
            <ul className="flex flex-col items-start  gap-5  ">
              {menu.map((e) => (
                <li className="text-[14px]  " key={e.id}>
                  {e.id === 2 ? (
                    <button
                      onClick={handleClick}
                      className="flex  items-center gap-2  hover:text-white "
                    >
                      {e.section} {navMenu ? <ChevronDown /> : <ChevronUp />}
                    </button>
                  ) : (
                    <Link
                      onClick={handleMenu}
                      className={`${
                        pathname === e.route ? "text-white" : ""
                      } hover:text-white  `}
                      href={e.route}
                    >
                      {e.section}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {navMenu && (
          <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 w-[60%] md:w-auto h-auto p-5  absolute top-[250px] right-5 lg:top-[80px] lg:right-[450px] rounded-b-xl shadow-xl border-gray-200  border-2 ">
            <ul className="flex flex-col gap-5 items-start  ">
              {lineas.map((e) => (
                <li key={e.id}>
                  <Link
                    onClick={handleMenu}
                    className=" hover:text-white rounded-xl text-[14px] font-bold   "
                    href={e.route}
                  >
                    {e.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* //? Menu Desktop */}
        <ul className="hidden  lg:flex gap-5">
          {menu.map((e) => (
            <li className="text-xl" key={e.id}>
              {e.id === 2 ? (
                <button
                  onClick={handleClick}
                  className="flex  items-center gap-2 text-blue-400 hover:text-white"
                >
                  {e.section} {navMenu ? <ChevronDown /> : <ChevronUp />}
                </button>
              ) : (
                <Link
                  className={`${
                    pathname === e.route ? "text-blue-400" : "text-blue-400"
                  } hover:text-white `}
                  href={e.route}
                >
                  {e.section}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* {navMenu && (
          <div className="bg-blue-400 w-[210px] h-[170px] p-5 md:block absolute top-[100px] right-[400px] rounded-xl shadow-xl  hidden  ">
            <ul className="flex flex-col gap-5  ">
              {lineas.map((e) => (
                <li key={e.id}>
                  <Link
                    onClick={handleClick}
                    className="hover:bg-slate-700  p-3 rounded-xl text-[14px] font-bold text-white "
                    href={e.route}
                  >
                    {e.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </nav>
    </section>
  );
};

export default Navbar;

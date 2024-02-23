"use client";

import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(null);
  const [view, setView] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateSize);

    if (width < 768) {
      setView(1);
    } else {
      setView(3);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [width]);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  return { view, width };
};

export default useWindowSize;

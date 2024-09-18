import { useEffect, useState } from "react";

export const useScreen = () => {
  const [windowSizeX, setWindowSizeX] = useState(0);

  useEffect(() => {
    setWindowSizeX(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowSizeX(window.innerWidth);
    });
  }, [windowSizeX]);

  return windowSizeX;
};

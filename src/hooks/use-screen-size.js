import { useEffect, useState } from "react";

/**
 * @typedef {Object} ScreenSize
 * @property {int} screenWidth - width of the window
 * @property {int} screenHeight - height of the window
 */

/**
 * Returns dimensions of window
 * @return {ScreenSize}
 */
export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: undefined,
    screenHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
}

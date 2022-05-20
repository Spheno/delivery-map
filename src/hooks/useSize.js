import { useState, useEffect } from 'react';

export function useSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      const hendleResize = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener("resize", hendleResize);
      return () => {
        window.removeEventListener("resize", hendleResize);
      }
    }, [])
    return windowSize
  }
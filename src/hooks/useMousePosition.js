import { useState, useEffect } from 'react';

export const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({});
  useEffect(() => {
    const getMousePosition = e => {
      const coordX = e.pageX;
      const coordY = e.pageY;
      setMousePosition({ coordX, coordY });
    };
    ref.current.addEventListener("mousemove", getMousePosition);
    return function cleanup() {
      ref.current.removeEventListener("mousemove", getMousePosition);
    };
  });
  return mousePosition;
};
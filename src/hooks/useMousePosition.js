import { useState, useEffect } from 'react';

export const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({});
  useEffect(() => {
    const getMousePosition = e => {
      e.preventDefault()
      const coordX = e.pageX;
      const coordY = e.pageY;
      setMousePosition({ coordX, coordY });
    };
    const map = ref.current
    map.addEventListener("mousemove", getMousePosition);
    return function cleanup() {
      map.removeEventListener("mousemove", getMousePosition);
    };
  });
  return mousePosition;
};
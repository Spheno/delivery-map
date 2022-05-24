
import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';
import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useSize } from '../../hooks/useSize';

export function Map({ model, onDeliveryClick, onMapClick, onDotClick, onNewDotClick }) {

  const mapRef = useRef()
  const mouseState = useMousePosition(mapRef)
  const windowWidth = useSize()

  useEffect(() => {
    handleMapClick()
  }, [mouseState])

  const [headerHeight, setHeaderHeight] = useState()

  const hadleWindowWidth = () => {
    if (windowWidth < 550) {
      setHeaderHeight(72)
    } else {
      setHeaderHeight(92)
    }
  }

  useEffect(() => {
    hadleWindowWidth()
  }, [windowWidth])

  const handleMapClick = () => {
    const width = mapRef.current.clientWidth
    const percent = width / 100
    const x = ((mouseState.coordX - (window.innerWidth - width) / 2) / percent).toFixed(15);
    const y = ((mouseState.coordY - headerHeight) / percent).toFixed(15);
    return onNewDotClick({ x, y })
  }


  const useMouse = () => {
    const [mousePosition, setMousePosition] = useState({});
    useEffect(() => {
      const getMousePosition = (e) => {
        e.preventDefault()
        const coordX = e.pageX;
        const coordY = e.pageY;
        setMousePosition({ coordX, coordY });
      };
      mapRef.current.addEventListener("mousemove", (e) => (getMousePosition(e)));
      return function cleanup() {
        mapRef.current.removeEventListener("mousemove", getMousePosition);
      };
    });
    //console.log(mousePosition)
    return mousePosition;
  };

  const dotMove = useMouse()
  
  useEffect(() => {
    handleDotMove()
    console.log( mouseState )
  }, [mouseState])

  const handleDotMove = () => {
    const width = mapRef.current.clientWidth
    const percent = width / 100
    const x = ((mouseState.coordX - (window.innerWidth - width) / 2) / percent).toFixed(15);
    const y = ((mouseState.coordY - headerHeight) / percent).toFixed(15);
    //return onNewDotClick({ x, y })
    console.log({ x, y })
  }

  

  

  return (

    <main className="page__container">
      <div className="map" onMouseUp={() => handleDotMove()}>
        <img className="map__plan" alt="карта" src={map} onClick={() => { handleMapClick(); onMapClick() }} ref={mapRef} />

        {model.map(dot => {
          return <Dot
            key={dot.id}
            dot={dot}
            id={dot.id}
            coordx={dot.x}
            coordy={dot.y}
            name={dot.name}
            amount={dot.amount}
            onDeliveryClick={onDeliveryClick}
            onDotClick={onDotClick}

          
          />
        })}

      </div>
    </main>

  );

};

import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';
import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useSize } from '../../hooks/useSize';

export function Map({ model, onDeliveryClick, onMapClick, onDotClick, onNewDotClick, onDotMove }) {

  const mapRef = useRef()
  const mouseState = useMousePosition(mapRef)
  const windowWidth = useSize()

  useEffect(() => {
    handleMapClick()
    //handleDotMove()
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

  const coord = () => {
    const width = mapRef.current.clientWidth
    const percent = width / 100
    const x = ((mouseState.coordX - (window.innerWidth - width) / 2) / percent).toFixed(15);
    const y = ((mouseState.coordY - headerHeight) / percent).toFixed(15);
    return { x, y }
  }

  const handleMapClick = () => {
    return onNewDotClick(coord())
  }

  /*
  const [isMove, setIsMove] = useState(false)

  useEffect(() => {
    const handlerIsMove = () => {
      setIsMove(true)
    }
    mapRef.current.addEventListener("mousedown", handlerIsMove);
    return function cleanup() {
      mapRef.current.removeEventListener("mousemove", handlerIsMove);
    };
  }, [mouseState])


  const handleDotMove = () => {
    setIsMove(false)
    return onDotMove(coord())
  }
  */


  return (

    <main className="page__container">
      <div className="map" /*onMouseUp={isMove && handleDotMove}*/>
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
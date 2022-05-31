
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
  }, [mouseState])

  const [headerHeight, setHeaderHeight] = useState()

  useEffect(() => {

    const hadleWindowWidth = () => {
      if (windowWidth < 550) {
        setHeaderHeight(72)
      } else {
        setHeaderHeight(92)
      }
    }

    hadleWindowWidth()
  }, [windowWidth])

  const coord = (coordX, coordY) => {
    const width = mapRef.current.clientWidth
    const percent = width / 100
    const x = ((coordX - (window.innerWidth - width) / 2) / percent).toFixed(15);
    const y = ((coordY - headerHeight) / percent).toFixed(15);
    return { x, y }
  }

  const handleMapClick = () => {
    return onNewDotClick(coord(mouseState.coordX, mouseState.coordY))
  }

  function handleDrop(e) {
    e.preventDefault()
    onDotMove(coord(e.pageX, e.pageY))
  }

  function handleDragOver(e) {
    e.preventDefault()
  }

  return (

    <main className="page__container">
      <div className="map">
        <img className="map__plan" alt="карта" src={map}
        onClick={() => { handleMapClick(); onMapClick() }}
        onDrop={(e) => { handleDrop(e) }}
        onDragOver={(e) => { handleDragOver(e) }}
        ref={mapRef} />

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
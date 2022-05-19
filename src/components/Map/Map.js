
import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';
import { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition'

export function Map({ model, onDeliveryClick, onMapClick, onDotClick, onNewDotClick }) {

  const mapRef = useRef()
  const mouseState = useMousePosition(mapRef)

  useEffect(() => {
  handleMapClick()
  }, [mouseState])

  const handleMapClick = () => {

    const width = mapRef.current.clientWidth
      const percent = width/100
      const x = ((mouseState.coordX - (window.innerWidth - width)/2)/percent).toFixed(15);
      const y = ((mouseState.coordY - 92)/percent).toFixed(15);
console.log(width, percent, mouseState.coordY)
    return onNewDotClick({x, y})
  }

  return (

    <main className="page__container">
      <div className="map">
        <img className="map__plan" alt="карта" src={map} onClick={() => {handleMapClick(); onMapClick()}} ref={mapRef} />

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

import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';
import { useState, useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition'

export function Map({ model, onDeliveryClick, onMapClick, onDotClick }) {

  const mapRef = useRef()
  const mouseState = useMousePosition(mapRef)

const [ff, setFf] = useState({})

  useEffect(() => {
    
      const width = mapRef.current.clientWidth
      const percent = width/100
      const x = (Math.floor(mouseState.coordX - (window.innerWidth - width)/2) / percent ).toFixed(15);
      const y = (Math.floor((mouseState.coordY - 92) / percent)).toFixed(15);
  
      
  console.log(x, y)
  return setFf({x, y})
  
    
  }, [mouseState])

  console.log(ff)


  const handleMapClick = (e) => {
    e.preventDefault()
    return onMapClick(ff)
  }







  return (

    <main className="page__container">
      <div className="map">
        <img className="map__plan" alt="карта" src={map} onClick={(e) => handleMapClick(e)} ref={mapRef} />

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
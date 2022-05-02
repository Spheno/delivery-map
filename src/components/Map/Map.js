
import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';

export function Map({ model, onDeliveryClick, onMapClick }) {

  return (

    <main className="page__container">
      <div className="map" >
        <img className="map__plan" alt="карта" src={map} onClick={onMapClick}/>

        {model.map(dot => {
          return <Dot 
          key={dot.id}
          id={dot.id}
          coordx={dot.x}
          coordy={dot.y}
          name={dot.name}
          amount={dot.amount}
          onDeliveryClick={onDeliveryClick}
          />
        })}

      </div>
    </main>

  );

};
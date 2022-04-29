
import map from '../../images/map.jpg';
import './Map.css';
import { Dot } from '../Dot/Dot';

export function Map({ model, onDeliveryClick }) {

  return (

    <main className="page__container">
      <div className="map" >
        <img className="map__plan" alt="карта" src={map} />

        {model.map(dot => {
          return <Dot 
          key={dot.toString()}
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


export function Dot({ coordx, coordy, name, amount, onDeliveryClick, id }) {

//console.log(id)

  return (
    <>
      <button className="map__mark" type="button" onClick={onDeliveryClick} style={{ top: `${coordy}%`, left: `${coordx}%` }}>

        <div className="map__dot" ></div>
        <div className="map__info" >
          <h2 className="map__title">{name}</h2>
          <p className="map__amount">{amount}шт</p>
        </div>

      </button>

      
    </>

  );

};
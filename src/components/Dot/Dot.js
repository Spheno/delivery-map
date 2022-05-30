export function Dot({ coordx, coordy, name, amount, onDeliveryClick, onDotClick, dot }) {

  function handleDrag(e, dot) {
    e.preventDefault()
    onDotClick(dot)
  }

const infoToltipPos = () => {
  if(coordy > 75 && coordx > 75) {
    return {bottom: `3px`, right: `3px`}
  } 
  if(coordy > 75) {
    return {bottom: `3px`, left: `3px`}
  } 
  if(coordx > 75) {
    return {top: `3px`, right: `3px`}
  } else {
    return {top: `3px`, left: `3px`}
  }
}

  return (

    <button className="map__mark" type="button"
      onClick={() => { onDeliveryClick(); onDotClick(dot) }}
      draggable={true}
      onDrag={(e) => { handleDrag(e, dot) }}
      style={{ top: `${coordy}%`, left: `${coordx}%` }}>

      <div className="map__dot" ></div>
      <div className="map__info" style={infoToltipPos()} >
        <h2 className="map__title">{name}</h2>
        <p className="map__amount">{amount}шт</p>
      </div>

    </button>

  );

};
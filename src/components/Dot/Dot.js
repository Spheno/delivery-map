export function Dot({ coordx, coordy, name, amount, onDeliveryClick, onDotClick, dot }) {

function handleDrag(e, dot) {
  e.preventDefault()
  onDotClick(dot)
  //console.log('drag', dot)
}

function handleDrop(e, dot) {
  e.preventDefault()
  console.log('drop', dot)
}

  return (
    <>
      <button className="map__mark" type="button"
        onClick={() => { onDeliveryClick(); onDotClick(dot) }} 
        draggable={true} 

        onDrag={(e) => {handleDrag(e, dot)}}
        //onDrop={(e) => {handleDrop(e, dot)}}


        style={{ top: `${coordy}%`, left: `${coordx}%` }}>

        <div className="map__dot" ></div>
        <div className="map__info" >
          <h2 className="map__title">{name}</h2>
          <p className="map__amount">{amount}шт</p>
        </div>

      </button>


    </>

  );

};
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap"; 
import { CartContext } from "../context/CartContext";


const CardButtons = (customStyle) => {

  const [state, setState] = useContext(CartContext)
  const [statet, setStatet] = useState(0);

  const handleMoreClick = () => {
    setState(state + 1)
    setStatet(statet + 1)
  }

  const handleLessClick = () => {
    setState(state - 1)
    setStatet(statet - 1)
  }



  return (
    <div className="d-flex align-items-center flex-column">
      <div className="d-flex w-25">
        <Button variant="outline-secondary" className="rounded-0" onClick={handleLessClick}>
          -
        </Button>

        <span>{statet}</span>
        {/* <input
          type="text"
          className="form-control form-control-sm text-center rounded-0"
          placeholder="Cantidad custom"
          id="valueInput"
          value="0"
        /> */}

        <Button variant="outline-secondary" className="rounded-0" onClick={handleMoreClick}>
          +
        </Button>

      </div>

      <Button className="ml-2" variant={customStyle.backgroundColor}>
        Agregar al Carrito
      </Button>
    </div>

  );

};

 

export default CardButtons;
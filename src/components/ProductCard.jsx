import React from "react";
import CardButtons from "./CardButtons";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {

const customStyleNoStock ={
  backgroundColor: "danger"
}

const customStyleStock = {
backgroundColor: "primary"
}



  return (
    <Card style={{ width: "18rem", margin: "10px 0" }}>
      {<Card.Img variant="top" src={productData.image} /> }
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <div>
        {productData.stock < 10 ? "ultimos productos": ""}</div>
        {productData.stock < 10 ?(
          <CardButtons customStyle= {customStyleNoStock}/>
        ):(
          <CardButtons customStyle = {customStyleStock}/>
        )}
          
          <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>

            <Link to={`/item/${productData.id}`}
            style={{
              marginTop: "10px",
              backgroundColor: "#007bff",
              textDecoration: "none",
              color: "white",
              borderRadius: "5px",
              fontSize: "18px",
              padding: "10px",
            }}
                        
            >
              Ir a detalle</Link> 
          </div>      
        
               
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

//
import React from "react";
import ProductCard from "../components/ProductCard";
const ItemDetailContainer = ({ productsData }) => {
  return (
    <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-evenly",
    }}
    >
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
      <div style={{
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "start"
        
      }}>
        <h2>Descripcion</h2>
        <p>
          Lorem 1 ipsum dolor sit amet consectetur adipisicing elit.
           Perspiciatis minus saepe sit, earum aliquid dolore atque 
           corporis a reiciendis rem enim harum hic placeat molestiae 
           est deserunt, autem neque quibusdam?
        </p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
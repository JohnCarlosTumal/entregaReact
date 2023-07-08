import React, { useState, useEffect, useContext } from "react";
import ItemListContainer from "../components/ItemListContainer";
//import { ProductsData } from "../json/Products";
import {CartContext} from "../context/CartContext";
//import axios from "axios";

import {collection, getDocs, getFirestore} from "firebase/firestore"
import loaderComponent from "../components/loaderComponent";

const homeStyles = {
  width: "100vw",
  height: "100%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
}


const Home = () => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "products")
    getDocs(productCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
        
      )
      setLoading(false)
    }).catch((error)=> setError(true))
    .then(()=> setLoading(false))
 
  },[] )


const state = useContext(CartContext) //

  return (  
    <div style={homeStyles} >
      {loading ? (
        <loaderComponent/>
      ):  error ? (
      <div>ERROR</div>
      ) :( 
      <ItemListContainer productsData={productsData} />
      )}
    </div>    
    
  );
};

export default Home;

//23:33

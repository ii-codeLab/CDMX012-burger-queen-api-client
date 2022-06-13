import React from "react";
import { useEffect, useState } from "react";

import Headers from "./components/Headers";
import Menus from "./components/Menus";
import DataProducts from "./components/DataProducts";

import "./css/headers.css";
import "./css/menus.css";
import "./css/dataProducts.css";
import "./App.css";

function App() {
  const url = "http://localhost:3128/products";
  const [products, setProducts] = useState([]);
  const [productMenu, setProductMenu] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    setProducts(responseJson);
    //console.log(responseJson);
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);


  const onBreakfast = () => {
    setProductMenu(products.filter((product) => product.type === "Breakfast"));
  };

  const onDaytime = () => {
    setProductMenu(products.filter((product) => product.type === "Daytime"));
  };

  return (
    <>
      <div>
        <Headers></Headers>

        <Menus 
        onBreakfast={onBreakfast} 
        onDaytime={onDaytime} 
        />

        <DataProducts products={productMenu} />
      </div>
    </>
  );
}

export default App;

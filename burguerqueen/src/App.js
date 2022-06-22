import React from "react";
import { useEffect, useState } from "react";

import Headers from "./components/Headers";
import Menus from "./components/Menus";
import DataProducts from "./components/DataProducts";
import Order from "./components/Order";

import "./css/headers.css";
import "./css/menus.css";
import "./css/dataProducts.css";
import "./css/order.css";
import "./App.css";

function App() {
  const url = "http://localhost:3128/products";

  const [products, setProducts] = useState([]);
  const [productMenu, setProductMenu] = useState([]);

  const [order, setOrder] = useState({
    client:"",
    items:[],
    total:0,
    status:"pending",
  })

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

  const onAddProduct =(newItem)=>{
/*------------------ Esto es un callback, que en lugar de pasar un valor de la nueva variable de estado, 
  ------------------ pasamos una función que tiene acceso al valor de estado anterior, solo se hace cuando
  ------------------ queremos cambiar el estado de una pequeña parte nuestro arreglo principal */ 


  /*----------------- Método find nos arroja un valor undefined ya ese elemento no se encuentra dentro del arreglo,
    ----------------- por lo tanto en el if se necesita negar el valor de undefined que al entrar el condicional es valor negativo*/ 
    console.log(newItem);
    const orderFind = order.items.find(item => item.name === newItem.name)
   console.log(orderFind);
    if(!orderFind) {
      setOrder((prevState)=>({...prevState,items:[...prevState.items,{...newItem, quantity: 1}]}))
    }else{
      setOrder((prevState)=>{
        const newState = {...prevState} 
        newState.items[newState.items.indexOf(orderFind)].quantity++;
        return newState
      })
    }
  }

  return (
    <>
      <div>
        <Headers></Headers>

        <section className="principal_container">
          <section>
            <Menus onBreakfast={onBreakfast} onDaytime={onDaytime} />

            <DataProducts products={productMenu} onAddProduct={onAddProduct} />
          </section>
    
          <Order order={order} onAddProduct={onAddProduct} />

        </section>

      </div>
    </>
  );
}

export default App;

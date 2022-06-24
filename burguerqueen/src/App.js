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
    console.log(newItem);
    const orderFind = order.items.find(item => item.id === newItem.id)
   //console.log("item encontrado", orderFind);
    if(!orderFind) {
      setOrder((prevState)=>({...prevState,items:[...prevState.items,{...newItem, quantity: 1}]}))
    }else{
      const newItems = order.items.filter((item)=> item.id !== newItem.id)
      orderFind.quantity++;
      console.log("item encontrado", orderFind, newItems);
      newItems.push(orderFind);
      setOrder({...order, items:newItems})
      /*setOrder((prevState)=>{
        const newState = {...prevState} 
        console.log("Aqui andamos", newState.items[newState.items.indexOf(orderFind)].quantity);
        newState.items[newState.items.indexOf(orderFind)].quantity++;
        return newState
      })*/
    }
  }

  const onsubstractProducts = (newItem)=>{
    const orderF = order.items.find(item => item.id === newItem.id)
    const reduceItem = order.items.filter((item)=> item.id === newItem.id)
    orderF.quantity--;
     console.log(reduceItem);
    console.log("item restado", orderF);
    if(orderF.quantity <= 0){
     reduceItem.shift(orderF)
    }
     setOrder({...order, items:reduceItem})
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
    
          <Order order={order} onAddProduct={onAddProduct} onsubstractProducts={onsubstractProducts} />

        </section>

      </div>
    </>
  );
}

export default App;

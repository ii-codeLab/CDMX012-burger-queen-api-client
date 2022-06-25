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
    client: "",
    items: [],
    total: 0,
    status: "pending",
  });

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

  const onAddProduct = (newItem) => {
    //console.log(newItem);
    const orderFind = order.items.findIndex((item) => item.id === newItem.id);
    setOrder((prevState) => ({...prevState,items: [...prevState.items, { ...newItem }]}));
    const copyItem = [...order.items];
    for (const propertyName in copyItem[orderFind]) {
      if (propertyName === "quantity") {
        copyItem[orderFind][propertyName] = copyItem[orderFind][propertyName] + 1;
      }
      console.log("item encontrado", orderFind, copyItem);
      setOrder({ ...order, items: [...copyItem] });
    }
  };

  const onsubstractProducts = (newItem, deleteAll) => {
    const orderLess = order.items.findIndex((item) => item.id === newItem.id);
    const copyItemLess = [...order.items];
    if (newItem.quantity > 1 && !deleteAll) {   //se recibe parametro de deletAll, se realiza comparación
      for (const propertyName in copyItemLess[orderLess]) {
        if (propertyName === "quantity") {
          copyItemLess[orderLess][propertyName] = copyItemLess[orderLess][propertyName] - 1;
        }
      }
    } else {
      copyItemLess.splice(orderLess, 1);
    }

    setOrder({ ...order, items: [...copyItemLess] });
  };

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

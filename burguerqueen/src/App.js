import React from "react";
import { useEffect, useState } from "react";

import Headers from "./components/Headers";
import Menus from "./components/Menus";
import "./css/headers.css";
import "./css/menus.css";
import "./App.css";

function App() {
  const url = "http://localhost:5000/products";
  const [products, setProducts] = useState();
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

  return (
    <>
      <div>
        <Headers></Headers>
        <Menus />

        {!products
          ? "Loading ...."
          : products.map((product, index) => {
              return (
                <div key={product.id}>
                  <section>
                    <img src={product.image} alt=""></img>

                    <p>{product.name}</p>
                    <p>
                      <strong>{product.price}</strong>
                    </p>
                  </section>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default App;

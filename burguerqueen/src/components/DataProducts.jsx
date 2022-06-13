import React from "react";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tool
const DataProducts = ({ products }) => {
  return (
    <>
      <div className="container">
        {products.map((product, index) => {
          return (
            <section className="product_container" key={index}>
              <img src={product.image} alt=""></img>
              <p>{product.name}</p>
              <p>
                <strong>${product.price}</strong>
              </p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default DataProducts;

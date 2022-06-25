import React from 'react'
import PropTypes from 'prop-types'
//import Item from '../components/Item';
import plus from '../assets/plus.png'
import less from '../assets/less.png'
//import { useState } from 'react'
//import { useNavigate } from "react-router-dom";


const Order = ({ order, onAddProduct, onsubstractProducts }) => {

    //const navigate = useNavigate();

    



    const handleKitchen = () => {
        const url = ' http://localhost:3128/products';
        const data = {
            "client": order.client,
            "table":"",
            "":order.items,             
            "total":""
          }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'                                                                                                                                                                                                                                                      
            }
        }).then(res => {
            //navigate("/inProcess")
            return res.json()
        })
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));


    };



    return (
        <>
            <div className='order_container'>

                <section className='info_client'>
                    <p>Client: </p>
                    <input type="text" placeholder='Name'></input>
                    <p>Table: </p>
                    <input id="table" type="number" placeholder='#'></input>
                </section>

                <section className='info'>
                    <p>Qty </p>
                    <p>Product </p>
                    <p>Price </p>|
                </section>

                {order.items.map((newItem, id) => {
                    console.log(newItem)
                    return (
                        <section className='info_items' key={id}>
                            <img className="btnMenos" src={less} alt="Menos" onClick={() => onsubstractProducts(newItem)} />

                            <p> {newItem.quantity} </p>
                            <p>{newItem.name}</p>
                            <p>
                                <strong> $ {newItem.price}</strong>
                            </p>
                            <img className="btnMas" src={plus} alt="Mas" onClick={() => onAddProduct(newItem)} />

                        </section>
                    );
                })}

                {/* Recorre el map con un retorno implicito */}
                {/*{order.items.map((newItem , id) => <div key={id}> {newItem.name}</div> )}*/}


                <section className='total'>
                    <h2>Total</h2>
                    <h2 id="pesos">$</h2>
                </section>

                <section className='kitchen' onClick={handleKitchen}>
                    {/*hacer el handle para el post y considerar que será una promesa then y catch, y considerar qué va a pasar
                    en el then y el catch.
            ver al botón de kitchen como el que guarda...*/}
                    <button id='btn_kitchen'>Send to kitchen</button>

                </section>


            </div>
        </>
    );
};

Order.propTypes = {
    order: PropTypes.object
}

export default Order;
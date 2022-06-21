import React from 'react'
import PropTypes from 'prop-types'
//import Item from '../components/Item';
import plus from '../assets/plus.png'
import less from '../assets/less.png'
import { useState } from 'react'


const Order = ({ order }) => {
    
    const [countClicks, setCountClicks] = useState(1);


    const handlePlus = ()=>{
        setCountClicks(countClicks + 1);
        //console.log("Click de Plus");
      }

      const handleLess = ()=>{
        //console.log("Click de Less");
        setCountClicks(countClicks - 1);
      }  



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
                    return (
                        <section className='info_items' key={id}>
                            <img className="btnMenos" src={less} alt="Menos" onClick={handleLess}/>

                            <p> {countClicks} </p>
                            <p>{newItem.name}</p>
                            <p>
                                <strong> $ {newItem.price}</strong>
                            </p>
                            <img className="btnMas" src={plus} alt="Mas"  onClick={handlePlus}/>

                        </section>
                    );
                })}

                {/* Recorre el map con un retorno implicito */}
                {/*{order.items.map((newItem , id) => <div key={id}> {newItem.name}</div> )}*/}


                <section className='total'>
                    <h2>Total</h2>
                    <h2 id="pesos">$</h2>
                </section>

                <section className='kitchen'>
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
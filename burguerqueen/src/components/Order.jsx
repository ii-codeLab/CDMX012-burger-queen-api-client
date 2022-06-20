import React from 'react'
import PropTypes from 'prop-types'
//import Item from '../components/Item';
//import mas from '../assets/mas.png'
//import menos from '../assets/menos.png'


const Order = ({order}) => {
    


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
                    <p>Product </p>
                    <p>Price </p>
                </section>

               
               {order.items.map((newItem , id) => <div key={id}> {newItem.name}</div> )}
               

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

 /*<section className='info_items'>
                    <img className="btnMenos" src={menos} alt="Menos" />
                    <img className="btnMas" src={mas} alt="Mas" />
                    </section>*/
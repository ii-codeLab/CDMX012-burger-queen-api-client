import React from 'react'

import home from '../assets/home.png'


function Headers() {
  
    return (
        <>
            <div>
                <header>
                <h1>Burguer Queen</h1>

                <nav className="menu">
                    <ul>
                        <li>New Order</li>
                        <li>In Process</li>
                        <li>Delivered</li>
                    </ul>
                </nav>
               
              <img className="btnHome" src={home} alt="Home" />
                </header>

                

            </div>
        </>
    )
}

export default Headers
import React from 'react'

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
function Menus({onBreakfast, onDaytime}) {
  const handleBreakfast = ()=>{
    onBreakfast()
  }

  const handleDaytime = ()=>{
    onDaytime()
  }

  return (
    <>
      <div className='btns_container'>
                <button id='btn_breakfast' onClick={handleBreakfast}>Breakfast</button>
                <button id='btn_daytime' onClick={handleDaytime}>Daytime</button>
      </div>
    </>
  )
}

export default Menus
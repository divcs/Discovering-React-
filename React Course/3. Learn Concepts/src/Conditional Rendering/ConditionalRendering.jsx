import React from 'react'

const ConditionalRendering = () => {
  let foodItems = ['Dal', 'Mango', 'Papaya', 'Peanuts', 'Cookies']

  //1. if method
  let FItems = []
  if (FItems.length === 0) {
    return <h3>I am still hungry</h3>
  }

  let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null
  return (
    <>
      <h1>Food Items</h1>
      {emptyMessage} //ignores when emptyMessage is null
      {/* 2. ternary */}
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className='list-group'>
        {foodItems.map(
          (
            item //inline rendering
          ) => (
            <li key={item} className='list-group-item'>
              {item}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default ConditionalRendering

//3 types:

// if else
// ternary operator
// logical operator

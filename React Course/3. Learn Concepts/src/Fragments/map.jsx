import React from 'react'

const map = () => {
  let foodItems = ['Dal', 'Mango', 'Papaya', 'Peanuts', 'Cookies']
  return (
    <>
      <h1>Food Items</h1>
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

export default map

//{items.map(item => <li key={item.id}>{item.name}</li>)}
//key prop
{
  /* <div key={item.id}>{item.name}</div> */
}

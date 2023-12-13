import React from 'react'
import { useState } from 'react'

const ControlledComp = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <form>
        <label htmlFor='Input Value'>Input Value:</label>
        <input
          type='text'
          id='Input Value'
          value={inputValue}
          onChange={handleChange}
        />
        <p>Input Value: {inputValue}</p>
      </form>
    </>
  )
}

export default ControlledComp

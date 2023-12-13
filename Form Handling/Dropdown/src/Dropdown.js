import React, { useState } from 'react'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </label>
      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default Dropdown

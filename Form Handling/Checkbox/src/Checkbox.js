import React from 'react'
import { useState } from 'react'

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState('false')

  const handleCheck = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <form>
        <label htmlFor='color'>
          Color:
          <input
            type='checkbox'
            name='color'
            checked={isChecked}
            onChange={handleCheck}
          />
          Blue
        </label>
        {isChecked && <div> Blue is selected!</div>}
        {!isChecked && <div>Blue is not selected</div>}
      </form>
    </>
  )
}

export default Checkbox

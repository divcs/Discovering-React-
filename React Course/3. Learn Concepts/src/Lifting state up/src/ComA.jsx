import React from 'react'
import CompB from './ComB'
const ComA = (props) => {
  return (
    <div>
      <CompB name={props.name} />
    </div>
  )
}

export default ComA

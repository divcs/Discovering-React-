import React, { useState } from 'react'
import ComponentA from './ComponentA'

const App = () => {
  const [name, setname] = useState('divya')

  return (
    <>
      <App />
      <ComponentA name={name} />
    </>
  )
}

export default App

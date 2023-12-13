import { useState } from 'react'
import ComA from './ComA'

function App() {
  const [count, setCount] = useState('divya')

  return (
    <>
      <h2>Lifting State</h2>
      <ComA name={count} />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, chaiCounter] = useState(0)

  // DATA HOOKS KE THROUGH UPDATE HOGA  AISE NEHI
  // let counter = 4
  let addValue = () => {
    // counter = counter + 1
    console.log("Clicked", counter);
    if (counter < 20) {
      chaiCounter(counter + 1)

    }
  }
  let decValue = () => {
    // counter = counter + 1
    console.log("Clicked", counter);
    if (counter > 0) {

      chaiCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

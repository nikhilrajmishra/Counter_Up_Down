import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(9)
  
  // let counter = 5


  const addValue = () => {
    // console.log("Value added", Math.random());
    // counter = counter++;
    // console.log('clicked', counter)
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>


      <button onClick={addValue} className='btn1'>Add Value</button>
      <br />
      <button onClick={removeValue} className='btn2'>remove value</button>
    </>
  )
}

export default App

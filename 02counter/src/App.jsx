import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 5

  const addValue = () => {
    console.log("Value added", counter)
    if(counter < 20){
    // counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    
    // setCounter(counter)
  }
  }

  const decValue = () => {
    if(counter > 0){
    counter = counter - 1
    setCounter(counter)}
  }
  return (
    <>
     <h1>Dumroo aur code</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Increase value {counter}</button>
     <button onClick={decValue}>Decrease value {counter}</button>
     <p>{counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = [1,2,3]
  let myObj = {
    username: 'shobhit'
  }
  return (
    <>
      <Card username='chai aur code' someObj={myObj}/>
      <Card username='dumroo' btnText='click me'/>
    </>
  )
}

export default App

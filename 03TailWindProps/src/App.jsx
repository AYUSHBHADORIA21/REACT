import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOne from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"ayush",
    age:21
  }

  let newArr = [1 ,2 ,3 ]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind Test</h1>
      {/* <CardOne channel="ChaiAurCode" someObj = {myObj} someArr ={newArr}/> */}
      {/* ye sab kar skte hai include obj or arr par {} ye lagta hai */}

      <CardOne username="ChaiAurCode" btnText = "Click Me"/>
      <CardOne username="AYush" btnText = "Visit Me"/>
    </>
  )
}

export default App

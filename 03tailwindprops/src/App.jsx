import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username: "Subhradeep",
    age: 22
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 rounded-sm text-white  mb-4'>Tailwind test</h1>
      <Card username="subhradeep" btnText="subhradeep123" />
      <Card username="chai" />
    </>
  )
}

export default App

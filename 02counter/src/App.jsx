import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  // let counter =10;

  let [counter , setCounter] = useState(10)

  const addvalue = () => {
    // setCounter(counter+1)
  setCounter(prev => {
    const updated = prev + 1
    console.log("Value added:", updated)
    return updated
  });

  

}


  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    console.log("value suntracted",counter-1)
  }

  return (
    <>
      <h1>DARA SINGH </h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>

    </>
  )
}

export default App

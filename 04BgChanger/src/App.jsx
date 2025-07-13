import { useState } from 'react'
import './App.css'


function App() {
  const [color , setcolor] = useState("brown")
  console.log(color)
  return (
    <>
      <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
          <div  className='bg-white flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-3xl' >
            <button className='shadow-xl' style={{backgroundColor:"Red" ,outlineStyle : "none" , borderRadius:30 ,color:"white" }} onClick={()=>{setcolor("Red")}}>Red</button>
            <button className='shadow-xl' style={{backgroundColor:"green" ,outlineStyle : "none" , borderRadius:30 ,color:"white" }} onClick={()=>{setcolor("Green")}}>Green</button>
            <button className='shadow-xl' style={{backgroundColor:"Blue", outlineStyle : "none" , borderRadius:30 ,color:"white"}} onClick={()=>{setcolor("Blue")}}>Blue</button>
            <button className='shadow-xl' style={{backgroundColor:"Olive", outlineStyle : "none" , borderRadius:30 ,color:"white"}} onClick={()=>{setcolor("Olive")}}>Olive</button>
            <button className='shadow-xl' style={{backgroundColor:"Grey", outlineStyle : "none" , borderRadius:30 ,color:"white"}} onClick={()=>{setcolor("Grey")}}>Grey</button>
            <button className='shadow-xl' style={{backgroundColor:"Yellow", outlineStyle : "none" , borderRadius:30 ,color:"Black"}} onClick={()=>{setcolor("Yellow")}}>Yellow</button>
            <button className='shadow-xl' style={{backgroundColor:"Pink", outlineStyle : "none" , borderRadius:30 ,color:"Black"}} onClick={()=>{setcolor("Pink")}}>Pink</button>
            <button className='shadow-xl' style={{backgroundColor:"Purple", outlineStyle : "none" , borderRadius:30 ,color:"white"}} onClick={()=>{setcolor("Purple")}}>Purple</button>
            <button className='shadow-xl' style={{backgroundColor:"Lavender", outlineStyle : "none" , borderRadius:30 ,color:"Black"}} onClick={()=>{setcolor("Lavender")}}>Lavender</button>
            <button className='shadow-xl' style={{backgroundColor:"White", outlineStyle : "none" , borderRadius:30 ,color:"Black"}} onClick={()=>{setcolor("White")}}>White</button>
            <button className='shadow-xl' style={{backgroundColor:"Black", outlineStyle : "none" , borderRadius:30 ,color:"white"}} onClick={()=>{setcolor("Black")}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

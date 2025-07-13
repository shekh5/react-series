
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {



    const [length , setlength] = useState(8)
    const [NumberAllowed , setNumberAllowed] = useState(false)
    const [CharactersAllowed , setCharactersAllowed] = useState(false)
    const [password , setpswd] = useState("")

  //useRef
  const passwordRef = useRef(null)


  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="asdfghjklpoiuytrewqzxcvbnmASDFGHJKLPOIUYTREWQZXCVBNM"
    if(NumberAllowed) str += "1234567890"
    if(CharactersAllowed) str += "{}[]()@#$%^&*+-*~`"
    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setpswd(pass)
  } ,[length,NumberAllowed,CharactersAllowed,setpswd])

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,CharactersAllowed,NumberAllowed,passwordGenerator])



  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" className='outline-none w-full py-1 px-3 bg-white' ref={passwordRef} readOnly placeholder='Password' value={password}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoClipboard} >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={25} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex intems-center gap-x-1'>
            <input type="checkbox" defaultChecked={NumberAllowed} id="numberInput" onChange={()=>{setNumberAllowed(prev=>!prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex intems-center gap-x-1'>
            <input type="checkbox" defaultChecked={CharactersAllowed} id="characterInput" onChange={()=>{setCharactersAllowed(prev=>!prev)}}/>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App

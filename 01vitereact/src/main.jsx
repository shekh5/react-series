import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>my App !</h1>
    </div>
  )
}

const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    childern:"click to visit google"
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
);

const React_Element = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
  // MyApp()//it is function. so, we can call this way also for render.
  // but we can't use by calling in strictMode.


  // <StrictMode>
  //  <MyApp/> 
  // </StrictMode> 


//  <ReactElement/>  
  anotherElement 
)

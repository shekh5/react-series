import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";

function App() {
  const [count, setCount] = useState(0);
  let obj ={
    username:"hitesh",
    age:23
  }
  let newArr=[1,2,3]

  // <Card channel="ChaiaurCode" someObj={obj} someArr={newArr}/>
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-l p-4">Tailwind Test</h1>
      <Card username="hitesh"/>
      <Card username="bhawani"/>
    </>
  );
}

export default App;
  
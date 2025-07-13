import { useState } from 'react';
import './App.css';

function Button({ color, setColor }) {
  return (
    <button
      className="text-white font-semibold px-4 py-2 rounded-lg shadow"
      style={{ backgroundColor: color.toLowerCase() }}
      onClick={() => setColor(color.toLowerCase())}
    >
      {color}
    </button>
  );
}

function App1() {
  const [color, setColor] = useState("brown");

  const colors = ["Red", "Green", "Blue", "Orange", "Purple", "Black"];

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-xl px-3 py-2 rounded-3xl">
          {colors.map((col) => (
            <Button key={col} color={col} setColor={setColor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App1;

import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}

     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">test</div>
        <button
        onClick={() => setColor("Red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Red"}}
        >Red</button>
        <button
        onClick={() => setColor("Green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Green"}}
        >Green</button>
        <button
        onClick={() => setColor("Yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Yellow"}}
        >Yellow</button>
        <button        
        onClick={() => setColor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}
        >Blue</button>
        <button
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Orange"}}
        >Orange</button>
        <button
        onClick={() => setColor("Violet")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Violet"}}
        >Violet</button>
        <button
        onClick={() => setColor("Lavender")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Lavender"}}
        >Lavender</button>
        <button
        onClick={() => setColor("Purple")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Purple"}}
        >Purple</button>
        <button
        onClick={() => setColor("Grey")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Grey"}}
        >Grey</button>
        <button
        onClick={() => setColor("Pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Pink"}}
        >Pink</button>
        <button
        onClick={() => setColor("Black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Black"}}
        >Black</button>
        <button
        onClick={() => setColor("Silver")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Silver"}}
        >Silver</button>
        <button
        onClick={() => setColor("Maroon")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Maroon"}}
        >Maroon</button>
      </div>
     </div>
  )
}

export default App

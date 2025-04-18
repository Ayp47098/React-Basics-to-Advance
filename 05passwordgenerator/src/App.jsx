import { useCallback, useState } from 'react'



function App() {
  const [count, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowd]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator= useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"
    if (numberAllowed) str +="0123456789"
    if (charAllowed) str +="!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= array.length; i++) {
      let char= Math.floor(Math.random()* str.length + 1)
      pass = str.charAt(char)

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
 
  return (
    <>
   
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
  <h1 className='text-white text-center'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor pointer'
      onChange={(e) => {setLength(e.target.value)}}/>
      <label>Length:{length}</label>
  </div>
</div>

    </>
  )
}

export default App

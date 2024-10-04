import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [count, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowd]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator= useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"
    if (numberAllowed) str +="123456789"
  }(fn,[length,numberAllowed,charAllowed,setPassword])
  const passwordGenerator= () => {}
  return (
    <>
   
     <h1 className='text-4xl text-center text-white '>Password Generator</h1>
    </>
  )
}

export default App

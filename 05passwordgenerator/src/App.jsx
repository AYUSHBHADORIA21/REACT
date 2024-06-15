import { useCallback, useEffect, useState , useRef} from 'react'
import './App.css'
import { Select } from '@material-ui/core'


  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //passwordGenerator() ye direct call nahi kar skte hai iske liye use karte hai useEffect()
  //useEffect is a React Hook that lets you synchronize a component with an external system.
  //useReff kese ka reference lene ke liye kam ata hai
  
function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  //ye memorize kar rha he optimize kar rha hai 
  //cache memory me rahta hai length , number , char , setpassword ko cache me rakho 
  const passwordGenerator  = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_-+={}[]~`"

    for (let i = 1; i <=length; i++){
      const char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);

    }

    setPassword(pass);

  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    //yaha pe Ref ka use aega jese copy karte hai to font highlist hota hai or copy ka state change hota hai uske
    //liye Ref use karenge

    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])


  //[lenght , char , number ] isme se kuch bhi chedh chadh ho to change kar do 
  //diff from callback function
  //page load hota hai to first time pe ye call hota hai 
  useEffect(()=>{passwordGenerator()},[length , numberAllowed , charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4"'>
            <input 
            type="text"
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard} 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
            </button>
        </div>
            <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setnumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App

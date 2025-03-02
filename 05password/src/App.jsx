import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);//slider se length lene ke liye
  const [numberAllowed, setNumberAllowed] = useState(false); //number wala check box pe click karne par number lenge yah nahi [DEFAULT IS FALSE](true/false)
  const [charAllowed, setCharAllowed] = useState(false); // same for character box
  const [password, setPassword] = useState("")// password field ke liye

  // useRef hook (for copy button to work)
  const passwordRef = useRef(null)



  // func to generate password== isse har jagah use karna hoga so useCallback() hook use karenge jo is func ko cache me store rakhta hai jisse re-render nahi hota
  // const passwordGenerator = useCallback(fn, [dependencies]) syntax
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=()`{}~[] "
    }

    // for loop chalake str se characters utha lenge taki password ban sake
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //yeh character ka index dega
      pass += str.charAt(char) //pass ko new ane wala value se conactenate kar rahe hai
    }

    setPassword(pass) //yeh func password me value de dega

  }, [length, numberAllowed, charAllowed, setPassword])



  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);//select hoga with range
    window.navigator.clipboard.writeText(password)
  }, [password])

  // passwordGenerator(); use nehi kar sakte directly

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className=' text-4xl text-center text-white '>Password Generator</h1>
      <div className=' w-full  max-w-md bg-gray-700 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500'>
        <h1 className=' text-white text-center py-1'>Password generator</h1>
        <div className=' flex  shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password} //jo password update hua hai upar woh yaha aa jayega
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className=' outline-none bg-blue-700 text-white px-3 py0.5 shrink-0 '
            onClick={copyPasswordToClipboard}
          >Copy</button>

        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex  items-center gap-x-2'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className=' cursor-pointer '
              onChange={(e)=>{setLength(event.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev) //prev[numberAllowed] ka value flip kar dega  [the onChange event handler for a checkbox is toggling the state of a variable called numberAllowed using the setNumberAllowed function]
              }}
            />
            <label > Numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev) //prev[charAllowed] ka value flip kar dega  [the onChange event handler for a checkbox is toggling the state of a variable called charAllowed using the setCharAllowed function]
              }}
            />
            <label > Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

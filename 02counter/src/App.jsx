//UI updation ko hook dekhta hai 
// console.log me to change ho jaega par UI me change nahi ho rha hai 
import { useState } from 'react';
import './App.css'

function App() {

  let [counter , setcounter] = useState(15)

  // let counter = 0 ; 

  const addValue = ()=>{
    counter++;
    //problem statement mann lo usne ye 4 bar likh diya to ??
    //ek click ke pe ek he value badh rhe hai koi change nahi 
    //useState jitne bhi update bhejne he UI or variable me to batchess me bhej ta hai
    //en pura ka ek batch banega ek he kam ko repeat kar rhe hai to (vo bolega same he to kam he )
    //to ek bar he counter++ karunga 
    // setcounter(counter);
    // setcounter(counter);
    // setcounter(counter);
    // setcounter(counter);

    //mann lo hamko ese tareke se increment karna hai to?
    //setcounter() ke andar bhi function use kar sakte hai
    setcounter((prevCounter)=>prevCounter+1)
    setcounter((prevCounter)=>prevCounter+1)
    setcounter((prevCounter)=>prevCounter+1)
    setcounter((prevCounter)=>prevCounter+1)

    //ab ye 19 answer dega (ek click pe) 
  }

  const removeValue = ()=>{
    counter--;
    setcounter(counter);
  }

  return (
    <>
    <h1>Ayush Bhadoria</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
    
  )
}

export default App

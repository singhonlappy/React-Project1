import { useState } from 'react'

function Test() {

    const[counter,setcounter]=useState(0)
    const [message, setMessage] = useState('');
  
   
    let addvalue=()=>
     {   if(counter>15)
          {
            setMessage("value is greater than 15")
            console.log({message})
          }      
          else{
         setcounter(counter++)
          }
     }
     const subvalue=()=>
     {
      if(counter<0)
      { 
        setMessage("value is lesser than 0")
        console.log({message})
      }      
      else{
        setcounter(counter--)
      }
        
     }

    return (
        <div>
      <h1>Hello Paaji!</h1>
      <button onClick={addvalue}>Add {counter}</button> <br></br>
      <button onClick={subvalue}>Remove {counter}</button>
      <h1>{message}</h1>
      </div>
    
    )
  }
  
  export default Test
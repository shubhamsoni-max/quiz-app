import React, { useState } from 'react'
function Home() {
   const [name ,setName] = useState("")
   const [nameErr ,setNameErr]  = useState("")

   function handleClick(){
    if(!name){
        setNameErr("Please enter your name !")
    }else{
        
       }
   }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>{
         setName(e.target.value);
        }} />
       
        <button onClick={handleClick}>
            Submit
        </button>
        <p>{nameErr}</p>
    </div>
  )
}

export default Home
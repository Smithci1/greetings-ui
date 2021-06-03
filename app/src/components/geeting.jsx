import React, { useState } from 'react';

const Greeting = () => {
    const [ name, setName ] = useState('')
    const updateName = (event) => {
        setName(event.target.value)
    }
    return (
        <div className= "greet" >
               <h1> To whom am I speaking to? </h1>
               <div>
                   <input type="text" name="search" onChange={updateName} />
                   <div className="hi"> {name?`It's nice to meet you ${name}`:null} </div>
               </div>
        </div>
    )
}


export default Greeting;


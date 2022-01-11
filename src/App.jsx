import React, { useState } from 'react'

const App = () => {

const [result,setResult]=useState('')

const click=(e)=>{
    setResult(result.concat(e.target.value))
}
const calculate=()=>{
    setResult(eval(result))
}
const clear=()=>{
    setResult("");
}
const back=()=>{
    setResult(result.slice(0,-1))
}

    return (
        <>
        <h1>Calculator</h1>
        <div className="container">
            
            <input type="text" placeholder="0" id='input' value={result}/>
            <input type="button" value="9" id='button' onClick={click}/>
            <input type="button" value="8" id='button' onClick={click}/>
            <input type="button" value="7" id='button' onClick={click}/>
            <input type="button" value="/" id='button' onClick={click}/>
            <input type="button" value="5" id='button' onClick={click}/>
            <input type="button" value="4" id='button' onClick={click}/>
            <input type="button" value="3" id='button' onClick={click}/>
            <input type="button" value="+" id='button' onClick={click}/>
            <input type="button" value="2" id='button' onClick={click}/>
            <input type="button" value="1" id='button' onClick={click}/>
            <input type="button" value="0" id='button' onClick={click}/>
            <input type="button" value="-" id='button' onClick={click}/>
            <input type="button" value="*" id='button' onClick={click}/>
            <input type="button" value="." id='button' onClick={click}/>
            <input type="button" value="Clear" id='button' onClick={clear} />
            <input type="button" value="Back" id='button' onClick={back} />
            <input type="button" value="Calculate" id='cal' onClick={calculate}/>
        </div>
        </>
    )
}

export default App




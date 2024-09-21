import { useState } from "react"

function Random() {

var [random, setrandom] = useState(0)

 function change() {
    const newvalue=Math.floor(Math.random()*100)
    setrandom(newvalue)
 }



    return(
        <div className="random">
            <h1>Random Number Generator</h1>
            <button onClick={change}>Click Here</button>
            <p>The Generated Random number is: <b> {random}</b></p>
        </div>
    )
}

export default Random
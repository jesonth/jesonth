import React, { useState } from 'react';

function Hookstate(){

    const [count,setCount] = useState(100); // state is Array
    //console.log(setCount)

    function increase(){
        setCount(count +1)
    }

    function decrease(){
        setCount(count -1)
    }


 /*    console.log(state)
   // const rgb = [31,184,90]
  //  console.log(rgb[0]) 
    const [red,blue,green] = [31,184,90]
    console.log(red)
    console.log(blue)
    console.log(green)
 */
    return (
        <div>
            <h2>React Hook State {count}</h2>
            <button onClick={increase}>Plus</button>
            <button onClick={decrease}>Minus</button>
        </div>
    )
}

export default Hookstate;

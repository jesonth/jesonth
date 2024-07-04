import React from 'react'


function Clock(props){

   return(<div>
    
    <h1>functional clock</h1>
    <p>{props.date.toLocaleTimeString()}</p>
    
    
    </div>);

}

export default Clock
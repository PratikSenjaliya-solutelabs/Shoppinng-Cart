import React from 'react';
import './Items.css';
const items=(props)=>{
    return(
        <div className="Items">
            <p>{props.name}</p>
            <p>Price:{props.price}</p>
            <button type="button" onClick={props.click} id="Button1">Delete Item</button>
        </div>
    )
    
}

export default items;
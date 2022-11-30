import React from "react";







export const ItemCounter =({type,decrement,increment,count})=> {
  
   
  
     return (
      <span className="itemCounterContainer">
      <button  disabled={type} onClick={increment}>+</button>
      <span>{Boolean(count)&&count}</span>
      <button disabled={type||count<1} onClick={decrement}>-</button>
      </span>
     
  
  
    )
   }

  





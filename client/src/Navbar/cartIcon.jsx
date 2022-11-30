import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import "../Styles/styles.css";



export const CartIcon = ({ onClick }) => {
  

  const{totalCount}=useContext(AppContext);

  

  return (
    <div className="PageCartIcon"  onClick={onClick}>
      <div>Cart</div>
    { Boolean(totalCount)&&
      (<div className="PageCartCounter">{totalCount}</div>)}
      </div>
  );
};



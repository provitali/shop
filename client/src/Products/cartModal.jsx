import React,{useContext} from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import "../Styles/styles.css";
import { CartItem } from "./cartItem";
import { useSelector } from "react-redux";

export const CartModal = () => {

  const{isModalCart,totalCount}=useContext(AppContext);
  const productCart=useSelector(state=>state.cartproducts.value);
 
  
  return isModalCart&&totalCount? (
    <div className="PageCartModalMask">
      <div className="PageCartModal">
      
        <p><b>My bag. </b>{totalCount} items</p>
        {productCart.map((product) => (
          <CartItem key={product.id} product={product}/>
  
        ))}
        <Link to="/cart">
         <button className="btn btnModal" > View Cart </button>
         </Link>
      </div>
    </div>
  ) : null;
  
};

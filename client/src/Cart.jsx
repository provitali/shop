import React from 'react';
import { useSelector } from 'react-redux';

import { CartItem } from './Products/cartItem';
import "./Styles/styles.css";

import { useState } from 'react';
import { useEffect } from 'react';


export const Cart = ({totalCount}) => {
    
    
  const[totalAmount,setTotalAmount]=useState(null);
    
  

      

    const cartProducts=useSelector(state=>state.cartproducts.value);
    const amount=cartProducts.reduce((sum,obj)=>sum+obj.amount,0);
    
   useEffect (()=>{setTotalAmount(amount)},[amount]);

    return <div className="cart">
        
        <br></br>
        <div className="cartHeader">
        <div><h3>CART</h3></div>
       
        </div>
        <br></br>
        {cartProducts.map((product)=>(
         <CartItem key={product.id} product={product} setTotalAmount={setTotalAmount} />
           
        ))}
        <div style={{borderTop:'1px solid lightgrey' }}>
        <div className="cartTotal">
       
        <p>Quantity:<b>{totalCount}</b></p>  
        <p>Total $:<b>{Math.round(totalAmount)}</b></p>
        </div>
        <button className="btnCart">Order</button>
        </div>
        </div>

}
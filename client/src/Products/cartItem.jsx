import React from "react";
import { useState } from "react";
import { ItemCounter } from "./itemCounter";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../App";
import { deleteCartProducts } from "../Features/cartProducts";
import { deleteCounter } from "../Features/counters";
import '../Styles/styles.css';

import cn from "classnames";







export const CartItem=({product,setTotalAmount})=> {

    const{name,brand,price,symbol,image,size,color,id,sizes,colors}=product;
    const{setTotalCount}=useContext(AppContext);

    const counterList=useSelector(state=>state.counters.value);
    const position=counterList.filter(counter=>counter.id===id);
    const target=position.pop();
    const [count,setCount]=useState(target?target.count:0);
    
    
  
    const dispatch=useDispatch();
    
    
       
    const delParams=()=> { 
        dispatch(deleteCartProducts(product));
        dispatch(deleteCounter(target));
    
    }
     
    

    

   

    const increment=()=>{
        setCount(count=>count+1);
        setTotalCount(count=>count+1);
        setTotalAmount(amount=>amount+price);
    }
    const decrement=()=>{
        setCount(count=>count-1);
        setTotalCount(count=>count-1);
        setTotalAmount(amount=>amount-price);
    }
   
   count<1&&delParams();

    return (
   
   <div className="cartItem">
   <div className="cartItemContainer">
   <div style={{fontSize:"1.5em", marginLeft:"1vw"}}><b>{name}</b></div>
   <p style={{fontSize:"1.2em" , marginLeft:"1vw"}}>{brand}</p>
   <p style={{fontSize:"1.1em" , marginLeft:"1vw"}}><b>
    <span>{symbol}</span>
    <span>{price}</span>
   </b></p>
   <div className="txt" style={{fontSize:"0.8em",marginLeft:"1vw"}}><b>{size&&"SIZE:"}</b></div>
   {sizes && (
   <div> 
    {sizes.map ((siz) => (
    <button className={cn("attribute", {"attributeActive": siz === size})} key={siz}>{siz}</button>))}
    </div>
    
   )}
   <div className="txt" style={{fontSize:"0.8em",marginLeft:"1vw"}}><b>{color&&"COLOR:"}</b></div>
{colors && (
   <div> 
    {colors.map ((col) => (
    <button className={cn("attribute", {"attributeActive": col === color})} style={{backgroundColor:`${col}`}}key={col}></button>))}
    </div>
    
   )}
    </div>
    
    <div className="flex">
    <ItemCounter  increment={increment} decrement={decrement} count={count}/>    
    <div className="cartImage" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
   </div>
   

    )}
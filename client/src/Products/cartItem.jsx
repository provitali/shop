import React from "react";
import { useState } from "react";
import { ItemCounter } from "./itemCounter";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../App";
import { deleteCartProducts } from "../Features/cartProducts";
import { deleteCounter } from "../Features/counters";






export const CartItem=({product})=> {

    const{name,amount,currency,image,sizes,id}=product;
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
    }
    const decrement=()=>{
        setCount(count=>count-1);
        setTotalCount(count=>count-1);
    }
   
   count<1&&delParams();

    return (
   
   <div className="cartItem">
   <div className="cartItemContainer">
   <div>{name}</div>
   <div>
    <span>{currency}</span>
    <span>{amount}</span>
   </div>
   {sizes && (
   <div> 
    {sizes.map ((sizeItem) => (
    <span key={sizeItem}>{sizeItem}</span>))}
    </div>
    
   )}
    </div>
    
    <div className="flex">
    <ItemCounter  increment={increment} decrement={decrement} count={count}/>    
    <div className="cartImage" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
   </div>
   

    )}
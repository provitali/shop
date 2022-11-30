import React, { useState } from "react";
import "../Styles/styles.css";
import { ItemCounter } from "./itemCounter";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../Features/counters";
import { addCartProducts } from "../Features/cartProducts";
import { useEffect } from "react";
import {useQuery,gql} from "@apollo/client";



export const ProductInfo = ({ id,setId,setTotalCount}) => {


  
 const PRODUCT=gql`
 query Product($id:String!) {
  product(id:$id)
  {
    
   name
   description
   gallery
   brand
   prices {
      currency {symbol}
      amount

   }

    }

 }

`



const {data}=useQuery(PRODUCT,{
  variables: {
    id: id
  },
});
     
  
 console.log(data);
  
  const cartProducts=useSelector(state=>state.cartproducts.value);
  const typeStatusArray=cartProducts.filter(product=>product.id===id);
  const typeStatus=typeStatusArray.pop();
 

  const [size, setSize] = useState();
  const type=typeStatus?typeStatus.type:false;


  const increment=()=> {setCount(count=>count+1)};
  const decrement=()=>{setCount(count=>count-1)};
 
  const dispatch=useDispatch();

  const [count,setCount]=useState(0);
  
  const counterList=useSelector(state=>state.counters.value);
  const countSum=counterList.reduce((sum,object)=>sum+object.count,0);
  useEffect(()=>{setTotalCount(countSum)},[countSum,setTotalCount])
  

  const setPam=()=> {

   
   dispatch(addCartProducts({id,type:true}));
   dispatch(addCounter({id,count}));
  
  }
  const close=()=> {

    setId();
   


  }



  return (
    <div className="PageProductInfo">
      <div className="close" onClick={close}>Close X</div>
      <div className="imageContainer" >
      
      <div className="flex">
      <ItemCounter type={type} increment={increment} decrement={decrement} count={count}/> 
      <div className="image" style={{ backgroundImage: `url(${data?.product.gallery[0]})` }}>
      
      </div>
      </div>
      </div>
      
      <div className="productInfoContainer">
      <div>{}</div>
               <div>
               <span>{data?.product.prices[0].amount}</span> 
               <span>{data?.product.prices[0].currency.symbol}</span>
               </div>
        
      {type? <button className="btn lowOpacity" disabled>In the Cart</button> 
      :
      <button className="btn" disabled={!size||count<1} onClick={setPam}>
        ADD TO CART
      </button> }
      <div>{data?.product.description}</div>
      </div>
    </div>
  );
};



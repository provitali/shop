import React, { useState } from "react";
import "../Styles/styles.css";
import { ItemCounter } from "./itemCounter";
import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../Features/counters";
import { addCartProducts } from "../Features/cartProducts";
import { useEffect } from "react";
import {useQuery,gql} from "@apollo/client";
import { SizeAttributes } from "./sizeAttributes";
import { ColorAttributes } from "./colorAttributes";



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

   attributes {
   id
   name
   type
   items {
      displayValue
      value
      id
    }
    
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
 
  const [color, setColor] = useState();
  const [size, setSize] = useState();


  const type=typeStatus?typeStatus.type:false;


  const increment=()=> {setCount(count=>count+1)};
  const decrement=()=>{setCount(count=>count-1)};
 
  const dispatch=useDispatch();

  const [count,setCount]=useState(0);
  
  const counterList=useSelector(state=>state.counters.value);
  const countSum=counterList.reduce((sum,object)=>sum+object.count,0);
  useEffect(()=>{setTotalCount(countSum)},[countSum,setTotalCount])
  
  const name=data?.product.name;
  const brand=data?.product.brand;
  const price=data?.product.prices[0].amount;
  const symbol=data?.product.prices[0].currency.symbol;
  const image=data?.product.gallery[0];
  const sizes=data?.product?.attributes[0]?.items.map(obj=>obj.value);
  const colors=data?.product?.attributes[1]?.items.map(obj=>obj.value);
  

  const setPam=()=> {

   
   dispatch(addCartProducts({id,name,brand,price,symbol,image,color,size,sizes,colors,type:true}));
   dispatch(addCounter({id,count}));
   
  
  }

  const close=()=> {

    setId();
   


  }

  const htmlDecode=()=>{
   return {__html:data?.product.description}
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
      <div style={{fontSize:"1.5em", marginLeft:"1vw"}}>{data?.product.name}</div>
      <p style={{fontSize:"1.2em" , marginLeft:"1vw"}}>{data?.product.brand}</p>
      <div style={{fontSize:"1.1em", marginLeft:"1vw"}}><b>{data?.product?.attributes[0]?.name}</b></div>
      
      {data?.product.attributes[0]&& 
      (<SizeAttributes setSize={setSize} size={size} type={type} id={id}/>)
       }

      {data?.product.attributes[1]?
      <div style={{fontSize:"1.1em", marginLeft:"1vw" }}><b>{data?.product?.attributes[1]?.name}</b></div>:null}

      {data?.product.attributes[1]&&        
      (<ColorAttributes setColor={setColor} color={color} type={type} id={id}/>)
      }
      <p style={{fontSize:"1.1em" , marginLeft:"1vw"}}><b>Price</b></p>
      <p style={{fontSize:"1.2em" , marginLeft:"1vw"}}>
      <span><b>{data?.product.prices[0].currency.symbol}</b></span> 
      <span><b>{data?.product.prices[0].amount}</b></span> 
      
      </p>
      
      {type? <button className="btn lowOpacity" disabled>In the Cart</button> 
      :
      <button style={{marginLeft:"1vw"}}className="btn" disabled={!size||count<1} onClick={setPam}>
        ADD TO CART
      </button> }
      <div style={{marginTop:"3vh", marginLeft:"1vw" }} dangerouslySetInnerHTML={htmlDecode()}/>
      </div>
    </div>
  );
};



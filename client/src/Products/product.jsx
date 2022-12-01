import React,{useState} from 'react';
import '../Styles/styles.css';
import cn from 'classnames';
import { ItemCounter } from './itemCounter';
import { useSelector } from 'react-redux';






export const Product = ({product, setId}) => {
    const {name, gallery,inStock,id,brand,prices} = product;
    
    
   
    const [count,setCount]=useState(0);
    
    const cartProducts=useSelector(state=>state.cartproducts.value);
    const typeStatusArray=cartProducts.filter(product=>product.id===id);
    const typeStatus=typeStatusArray.pop();
    
    
   

    const [type,setType]=useState(typeStatus?typeStatus.type:false);

    const increment=()=> {setCount(count=>count+1)};
    const decrement=()=>{setCount(count=>count-1)};
    
  
    
    const add=()=> {
     
        setId(id);
        setType(!type);

    }

    

    return (
        <div className={cn("PageProduct",{"PageProduct lowOpacity":inStock===false})}>
            <div className="flex">
            <span><ItemCounter type={type} increment={increment} decrement={decrement} count={count}/></span> 
            <div  style={{backgroundImage: `url(${gallery[0]})` }} className="stock" onClick={inStock&&add}>{inStock===false&&<p>Out of stock</p>}</div>
            </div>
            
            
           <span><span>{brand}</span>  <span>{name}</span></span>
        
            <div>
                <span>{prices[0].currency.symbol}</span>
                <span>{prices[0].amount}</span>
               
                </div>
            </div>
            
    );
};

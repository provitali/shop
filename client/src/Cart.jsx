import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from './Products/cartItem';


export const Cart = () => {
    
    
    
    
    

    const cartProducts=useSelector(state=>state.cartproducts.value);
    

    return <div className='cart'>
        
        <br></br>
        <div className='cartHeader'>
        <div><h3>CART</h3></div>
        <Link style={{textDecoration:"none"}} to="/">
        <div >Back to the Main Page</div>
        </Link>
        </div>
        <br></br>
        {cartProducts.map((product)=>(
         <CartItem key={product.id} product={product} />
           
        ))}
        <div style={{borderTop:'1px solid lightgrey' }}>
    
        <p>Tax 21%:<b>40$</b></p>
        <p>Quantity:<b>3</b></p>  
        <p>Total:<b>200$</b></p>
        <button className='btn'>Order</button>
        </div>
        </div>

}
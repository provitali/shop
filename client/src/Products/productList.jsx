import React from 'react';
import {Product} from './product';
import'../Styles/styles.css';
import {useQuery,gql} from "@apollo/client";
import { useContext } from 'react';
import { AppContext } from '../App';

import { useEffect } from 'react';




export const ProductList = ({setId,setProducts,filtered}) => {
    
    const {tab}=useContext(AppContext);
    
    
     
    


    const PRODUCTS=gql`
    query Products($title:String!) {
       category(input:{title:$title})
     {
       products
       { 
         id
         name
         inStock
         gallery
         brand
         prices {
            currency {symbol}
            amount

         }
    
       
           
         
       }
      
       }
   
    }
   
   `
  


    const {data}=useQuery(PRODUCTS,{
        variables: {
          title: tab
        },
      });
    useEffect(()=>{setProducts(data?.category.products)},[data,setProducts]);
  

    return (
        <div className="PageProducts">
        
            {filtered?.map(product => (
                <Product  key={product.id}
                 product={product} 
                 setId={setId}  />
            ))}
        </div>
    );
};

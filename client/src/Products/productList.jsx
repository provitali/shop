import React from 'react';
import {Product} from './product';
import'../Styles/styles.css';
import {useQuery,gql} from "@apollo/client";
import { useContext } from 'react';
import { AppContext } from '../App';




export const ProductList = ({setId}) => {
    
    const {tab}=useContext(AppContext);
    console.log(tab);

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
    console.log(data);
  

    return (
        <div className="PageProducts">
            {data?.category.products.map(product => (
                <Product  key={product.id}
                 product={product} 
                 setId={setId}  />
            ))}
        </div>
    );
};

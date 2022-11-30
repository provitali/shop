import React from "react";
import {useQuery,gql} from "@apollo/client";






export const DisplayData=()=> {
    
  const PRODUCTS=gql`
  query Products {
     category(input:{title:"clothes"})
   {
     products
     {
       id
       name
       prices {
         currency {symbol}
         amount
         
       }
       brand
       description
       inStock
       
     
         
       
     }
    
     }
 
  }
 
 
 
 `

    const {data}=useQuery(PRODUCTS);
    console.log(data);
    
   
    
    
    return (  

        <div> 
       {data&&data.category.products.map((product)=>{

        return (

            <div key={product.id}>
                <h1>key </h1>
                <h1>{product.name} </h1>
                <h1> {product.id} </h1>
                <h1>{product.description} </h1>
                <h1>{product.brand} </h1>
                
            </div>
                
        );
       })}
     
       
    
    
    
        </div>

    



    );
}


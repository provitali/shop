
import { Attribute } from "./attribute";
import {useQuery,gql} from "@apollo/client";
import "../Styles/styles.css";





export const SizeAttributes=({id,setSize,size})=> {

    const ATTRIBUTES=gql`
    query Attributes ($id:String!) {
     product(id:$id)
     {
       
     
   
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

   const {data}=useQuery(ATTRIBUTES,{
    variables: {
      id: id
    },
  });




return (
    <div className="sizeAttributes">
   {data?.product.attributes[0].items.map((attribute)=>(
     
    <Attribute  key={attribute.id} attribute={attribute.value}
     setAttribute={setSize}  currentAttribute={size}
     />
 ))}

 </div>

)





}
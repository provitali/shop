
import { Attribute } from "./attribute";
import {useQuery,gql} from "@apollo/client";
import "../Styles/styles.css";




export const ColorAttributes=({id,setColor,color,type})=> {

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
    <div className="colorAttributes">
   {data?.product.attributes[1].items.map((attribute)=>(
     
    <Attribute type={type} key={attribute.id} color={data?.product.attributes[1].name} 
    attribute={attribute.value} setAttribute={setColor} 
    currentAttribute={color}/>
 ))}

 </div>

)





}
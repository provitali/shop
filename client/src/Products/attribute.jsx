import cn from 'classnames';




export const Attribute =({attribute,setAttribute,color,currentAttribute})=> {
    
   console.log(currentAttribute);
    
    return (
 
   
    
    
   
    <button  className={cn("attribute", {"attributeActive": attribute === currentAttribute})}
     style={{backgroundColor:`${color?attribute:null}`}}
       onClick={() => setAttribute(attribute)} >{color?null:attribute}</button>
)

    
    }


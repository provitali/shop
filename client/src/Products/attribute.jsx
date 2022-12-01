import cn from 'classnames';
import '../Styles/styles.css';




export const Attribute =({attribute,setAttribute,color,currentAttribute,type})=> {
    
   console.log(currentAttribute);
    
    return (
 
   
    
    
   
    <button  className={cn("attribute", {"attributeActive": attribute === currentAttribute})}
     style={{backgroundColor:`${color?attribute:null}`}} disabled={type}
       onClick={() => setAttribute(attribute)} >{color?null:attribute}</button>
)

    
    }


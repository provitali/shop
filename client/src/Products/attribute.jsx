import cn from 'classnames';




export const Attribute =({attribute,setAttribute,color})=> 
    
   
    
    (
 
   
    
    
   
    <button  className='attribute'
     style={{backgroundColor:`${color?attribute:null}`}}
       onClick={() => setAttribute(attribute)} >{color?null:attribute}</button>
)

    



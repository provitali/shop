import React, { useState } from "react";
import { ProductInfo } from "./Products/productInfo";
import { ProductList } from "./Products/productList";
import "./Styles/styles.css";
import { CartModal } from "./Products/cartModal";







const MainPage = ({setTotalCount}) => {
  
  
 
  
  const [id, setId] = useState();
  const[search,setSearch]=useState("");
  const [products,setProducts]=useState();
   
  const filtered=products?.filter(item=>{return item.brand.toLowerCase().includes(search.toLowerCase());});
  

  const getComponent = () => {
    if (id) {
      return (
        <ProductInfo  id={id} setId={setId} setTotalCount={setTotalCount}  />
      );
    }
    return <ProductList setId={setId} filtered={filtered} setProducts={setProducts}/>;
  };

  return (
    <div className="Page">
      <input  placeholder="Filter items..." onChange={(event)=>{setSearch(event.target.value);}}/>
      <div className="PageContent">
      <CartModal/>
      {getComponent()}
      </div>
    </div>
  );
};

export default MainPage;

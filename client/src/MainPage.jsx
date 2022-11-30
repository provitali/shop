import React, { useState, useContext } from "react";
import { ProductInfo } from "./Products/productInfo";
import { ProductList } from "./Products/productList";
import "./Styles/styles.css";
import { AppContext } from "./App";
import { CartModal } from "./Products/cartModal";
import cn from "classnames";






const MainPage = ({setTotalCount}) => {
  
  
 
  
  const [id, setId] = useState();
  const {tab}=useContext(AppContext);
  
 
   
 
  

  const getComponent = () => {
    if (id) {
      return (
        <ProductInfo  id={id} setId={setId} setTotalCount={setTotalCount}  />
      );
    }
    return <ProductList setId={setId} />;
  };

  return (
    <div className="Page">
      <div className="PageContent">
      <div className={cn("categoryName",{"hidden":id})}>{tab}</div>
      <CartModal/>
      {getComponent()}
      </div>
    </div>
  );
};

export default MainPage;

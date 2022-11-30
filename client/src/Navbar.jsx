import { CartIcon } from "./Navbar/cartIcon";
import { Tabs } from "./Navbar/tabs";
import React, { useContext } from "react";
import "./Styles/styles.css"
import { AppContext } from "./App";





export const Navbar=()=> { 
    const {setIsModalCart,isModalCart}=useContext(AppContext);
    const onSetIsModalCart = () => setIsModalCart(!isModalCart);
    return (

        <div className="PageHeader">
            <Tabs />
            <CartIcon onClick={onSetIsModalCart}/>
           
        </div>





    );}



import React, { useContext } from 'react';
import { AppContext } from '../App';
import '../Styles/styles.css';
import {Tab} from './tab';
import {useQuery,gql} from "@apollo/client";



const CATEGORIES=gql`
 query Categories {
   categories {
   
   name
   }

 }



`




export const Tabs = () => {

   const {setTab,tab}=useContext(AppContext);
   
   const {data}=useQuery(CATEGORIES);
    
  

    return(
    <div className="PageTabs">
        
       
       {data&&data.categories.map((item) => (
            <Tab key={item.name} tab={item.name} setTab={setTab} currentTab={tab} />
        )) }
    </div>
);
        }

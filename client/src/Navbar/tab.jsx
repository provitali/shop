import cn from 'classnames';
import React from 'react';



import '../Styles/styles.css';

export const Tab = ({ currentTab,tab,setTab}) => { 
    
   
    return(
    <div
        className={cn("PageTab", {"PageTabActive": tab === currentTab})}
        onClick={() => setTab(tab)}
    >
        {tab}
    </div>
);}

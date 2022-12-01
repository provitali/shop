
import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
import { useState,createContext} from 'react';
import './App.css';
import MainPage from './MainPage';
import {Cart}  from './Cart';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Navbar } from './Navbar';








export const AppContext=createContext();

function App() {


  
  const [isModalCart, setIsModalCart] = useState(false);
  const [tab, setTab] = useState("all");
  const [totalCount,setTotalCount]=useState(0);
  console.log(tab);
 

  const client=new ApolloClient({
   cache:new InMemoryCache(),
   uri:"http://localhost:4000/graphql" 
  })
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <AppContext.Provider value={{
      isModalCart,setIsModalCart,
      tab,setTab,
      totalCount,setTotalCount
      }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage setTotalCount={setTotalCount} />}/>
          <Route path="/cart" element={<Cart totalCount={totalCount} />}/>
        </Routes>
      </Router>
    </AppContext.Provider>
    </div>
    </ApolloProvider>
  );
}

export default App;

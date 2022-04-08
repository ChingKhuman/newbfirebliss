import React from "react";
import {Route , BrowserRouter, Routes, Navigate} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import ProductInfo from "./pages/ProductInfo"
import CartPage from "./pages/CartPage"
import Loginpage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

import './stylesheets/Layout.css'
import './stylesheets/products.css'
import OrderPage from "./pages/OrderPage";
//import './stylesheets/authentication.css'

function App() {
  return (
   <div>
   <BrowserRouter>
     <Routes>
      <Route path="/" exact element= {<ProtectedRotes><Homepage /></ProtectedRotes>} />
      <Route path="/productinfo/:productid" exact element= {<ProtectedRotes><ProductInfo /></ProtectedRotes>} />
      <Route path="/cart" exact element= {<ProtectedRotes><CartPage /></ProtectedRotes>} />
      <Route path="/orders" exact element= {<ProtectedRotes><OrderPage /></ProtectedRotes>} />
      <Route path="/login" exact element= {<Loginpage />} />
      <Route path="/register" exact element= {<RegisterPage />} />
     </Routes>
   </BrowserRouter>
     
   </div>
    
 
  );
}

export default App;

export const ProtectedRotes=({children}) =>{
  if(localStorage.getItem('currentUser')){
    return children
  }
  else{
    return(
    <Navigate to='/login'/>
    )
  }
}

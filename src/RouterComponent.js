import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Confirm from "./Confirm";
import LoginComponent from "./LoginComponent";
import Passwordreset from "./Passwordreset";
import ProductComponent from "./ProductComponent";
import RegisterComponent from "./RegisterComponent";
 
 function RouterComponent() {
   return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path='/resetpassword' element={<Passwordreset/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>
        <Route path="/products" element={<ProductComponent/>}/>
        <Route path="/resetpass/:id/:token" element={<Confirm/>}/>

    </Routes>
    </BrowserRouter>
    </>
   )
 }
 
 export default RouterComponent


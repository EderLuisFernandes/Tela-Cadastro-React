import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home"
import User from "./container/User"


function Rotas() {

    return (
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Usuarios" element={<User/>}/>

         </Routes>
        </BrowserRouter>
    )
}
export default Rotas

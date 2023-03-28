import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/index";
import PaginaErro from "../pages/paginaErro/index";
import Cursos from "../pages/Cursos/index";
import SideBar from "../pages/SideBar/index";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/paginaerro' element={<PaginaErro />} />
                <Route path='/Cursos' element={<Cursos />} />
                <Route path='/sidebar' element={<SideBar/>}/>

            </Routes>
        </BrowserRouter>
    )
}
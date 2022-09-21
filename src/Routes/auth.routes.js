import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from '../Components/Header'
import Home from "../Pages/Home";
import RegisterFinance from '../Pages/RegisterFinance';
import Profile from '../Pages/Profile';
import Suporte from '../Pages/Suporte';
import PageNotFound from '../Pages/PageNotFound';

export default function AuthRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registerfinance" element={<RegisterFinance />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/suporte" element={<Suporte />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}   
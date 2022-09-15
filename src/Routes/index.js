import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from '../Components/Header'

import React from 'react';
import Home from "../Pages/Home";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
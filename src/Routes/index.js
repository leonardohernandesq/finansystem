import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from '../Components/Header'
import Home from "../Pages/Home";
import SignIn from '../Pages/SignIn';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Suporte from '../Pages/Suporte';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/suporte" element={<Suporte />} />
            </Routes>
        </BrowserRouter>
    );
}   
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import OffHeader from '../Components/OffHeader'
import SignIn from '../Pages/SignIn';
import Register from '../Pages/Register'
import Suporte from '../Pages/Suporte';
import PageNotFound from '../Pages/PageNotFound';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <OffHeader />
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/suporte" element={<Suporte />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}    
import React from 'react';

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import CreateRoom from "./pages/CreateRoom";
import EnterRoom from "./pages/EnterRoom";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/forget-password" element={<ForgetPassword />} exact />
                <Route path="/create-room" element={<CreateRoom />} exact />
                <Route path="/enter-room" element={<EnterRoom />} exact />
            </Routes>
        </>
    );
}
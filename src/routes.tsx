import React from 'react';

import { Routes, Route } from "react-router-dom";

import PublicRoute from "./components/PublicRoute/index";
import PrivateRoute from "./components/PrivateRoute/index";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import CreateRoom from "./pages/CreateRoom";
import EnterRoom from "./pages/EnterRoom";
import RecoverPassword from "./pages/RecoverPassword";
import Room from "./pages/Room";
import MyQuestions from "./pages/MyQuestions";
import UpdateEmail from "./pages/UpdateEmail";
import UpdateName from "./pages/UpdateName";
import UpdatePassword from "./pages/UpdatePassword";
import DeleteUser from "./pages/DeleteUser";
import VerifyEmail from './pages/VerifyEmail';
import VerifyEmailUpdate from './pages/VerifyEmailUpdate';
import Modal from './pages/Modal';
import PageNotFound from "./pages/PageNotFound";

export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicRoute />} >
                    <Route path="/" element={<Login />} />
                </Route>

                <Route path="/register" element={<PublicRoute />} >
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/verify-email" element={<PublicRoute />} >
                    <Route path="/verify-email" element={<VerifyEmail />} />
                </Route>

                <Route path="/forget-password" element={<PublicRoute />} >
                    <Route path="/forget-password" element={<ForgetPassword />} />
                </Route>

                <Route path="/password-recover" element={<PublicRoute />} >
                    <Route path="/password-recover" element={<RecoverPassword />} />
                </Route>

                <Route path="/create-room" element={<PrivateRoute />} >
                    <Route path="/create-room" element={<CreateRoom />} />
                </Route>

                <Route path="/enter-room" element={<PrivateRoute />} >
                    <Route path="/enter-room" element={<EnterRoom />} />
                </Route>

                <Route path="/room/:code" element={<PrivateRoute />} >
                    <Route path="/room/:code" element={<Room />} />
                </Route>

                <Route path="/my-questions" element={<PrivateRoute />} >
                    <Route path="/my-questions" element={<MyQuestions />} />
                </Route>

                <Route path="/update-email" element={<PrivateRoute />} >
                    <Route path="/update-email" element={<UpdateEmail />}  />
                </Route>

                <Route path="/verify-update-email" element={<PrivateRoute />} >
                    <Route path="/verify-update-email" element={<VerifyEmailUpdate/>} />
                </Route>

                <Route path="/update-name" element={<PrivateRoute />} >
                    <Route path="/update-name" element={<UpdateName />} />
                </Route>

                <Route path="/update-password" element={<PrivateRoute />} >
                    <Route path="/update-password" element={<UpdatePassword />} />
                </Route>

                <Route path="/delete-user" element={<PrivateRoute />} >
                    <Route path="/delete-user" element={<DeleteUser />} />
                </Route>

                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
        </>
    );
}

export const ModalRoute = () => {
    return ( 
        <>
            <Routes>
                <Route path="/*" element={<Modal />} />
            </Routes>
        </>
     );
}
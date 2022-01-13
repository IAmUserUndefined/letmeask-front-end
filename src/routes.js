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
                <Route path="/" element={<PublicRoute />} exact>
                    <Route path="/" element={<Login />} exact />
                </Route>

                <Route path="/register" element={<PublicRoute />} exact>
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/verify-email" element={<PublicRoute />} exact>
                    <Route path="/verify-email" element={<VerifyEmail />} exact />
                </Route>

                <Route path="/forget-password" element={<PublicRoute />} exact>
                    <Route path="/forget-password" element={<ForgetPassword />} exact />
                </Route>

                <Route path="/password-recover" element={<PublicRoute />} exact>
                    <Route path="/password-recover" element={<RecoverPassword />} exact />
                </Route>

                <Route path="/create-room" element={<PrivateRoute />} exact>
                    <Route path="/create-room" element={<CreateRoom />} exact />
                </Route>

                <Route path="/enter-room" element={<PrivateRoute />} exact>
                    <Route path="/enter-room" element={<EnterRoom />} exact />
                </Route>

                <Route path="/room/:code" element={<PrivateRoute />} exact>
                    <Route path="/room/:code" element={<Room />} exact />
                </Route>

                <Route path="/my-questions" element={<PrivateRoute />} exact>
                    <Route path="/my-questions" element={<MyQuestions />} exact />
                </Route>

                <Route path="/update-email" element={<PrivateRoute />} exact>
                    <Route path="/update-email" element={<UpdateEmail />} exact />
                </Route>

                <Route path="/verify-update-email" element={<PrivateRoute />} exact>
                    <Route path="/verify-update-email" element={<VerifyEmailUpdate/>} exact />
                </Route>

                <Route path="/update-name" element={<PrivateRoute />} exact>
                    <Route path="/update-name" element={<UpdateName />} exact />
                </Route>

                <Route path="/update-password" element={<PrivateRoute />} exact>
                    <Route path="/update-password" element={<UpdatePassword />} exact />
                </Route>

                <Route path="/delete-user" element={<PrivateRoute />} exact>
                    <Route path="/delete-user" element={<DeleteUser />} exact />
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
                <Route path="/*" exact element={<Modal />} />
            </Routes>
        </>
     );
}
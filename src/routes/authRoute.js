import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

const SignIn = React.lazy(() => import("../component/SignIn/SignIn"))
const Login = React.lazy(() => import("../component/Login/Login"))


function AuthRoute(props) {
  return (
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
    </>
  );
}

export default AuthRoute;
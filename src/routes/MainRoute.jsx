import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, NotFoundPage, LoginPage, RegisterPage, DetailPage } from './../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
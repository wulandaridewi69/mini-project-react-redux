// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  HomePage, 
  NotFoundPage, 
  LoginPage, 
  DetailPage, 
} from './../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
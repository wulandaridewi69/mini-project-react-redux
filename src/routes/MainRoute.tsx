import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DemoPage, HomePage, NotFoundPage } from './../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/demo" element={<DemoPage/>} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
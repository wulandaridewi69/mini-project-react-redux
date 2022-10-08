
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  // SamplePage, 
  HomePage, 
  NotFoundPage, 
  LoginPage, 
  SamplePage, // for sample
} from './../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            {/* <Route path="/demo" element={<SamplePage/>} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sample/:id" element={<SamplePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
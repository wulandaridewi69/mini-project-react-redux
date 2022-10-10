// @ts-nocheck
import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props) => {
    
  return (
    <div className="bg-gray-900">
      {/* <Header /> */}
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout;
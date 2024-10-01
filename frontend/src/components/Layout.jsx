import React from "react";
import "../styles/Layout.css";
import Header from "./Header/Header";
import Footer from "./Footer";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <body>
        <SideBar />
        {children}
      </body>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import "Layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <body>
        <SideBar />
        {children}
      </body>
      <Footer />
      </>
  );
};

export default Layout;

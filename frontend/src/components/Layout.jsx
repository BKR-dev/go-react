import React from "react";
import "./Layout.css";
import Footer from "./Footer/Footer";
// import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;

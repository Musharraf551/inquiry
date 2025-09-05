import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InquiryForm from "./pages/InquiryForm";
// import LoginPage from "./pages/LoginPage";
// import AdminInquiriesPage from "./pages/AdminInquiriesPage";
import Navbar from "./components/Navbar";
import Carousel from "./pages/Carousel";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  return (
    <>
      <Navbar />
      <Carousel />
      <Home />
      <AboutUs />
      <Product />
      <Menu />
      <InquiryForm />
      <Footer />
    </>
    
  );
}

export default App;

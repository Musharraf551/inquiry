import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Carousel from "./pages/Carousel";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Menu from "./pages/Menu";
import InquiryForm from "./pages/InquiryForm";
import LoginPage from "./pages/LoginPage";
import ListInquiry from "./pages/ListInquiry";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <Router>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Home />
              <AboutUs />
              <Product />
              <Menu />
              <InquiryForm />
            </>
          }
        />
        
        {/* Inquiry page */}
        <Route path="/inquiry" element={<InquiryForm />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/inquiry" element={<ListInquiry />} /> */}
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/admin/inquiry" element={token ? <ListInquiry /> : <LoginPage setToken={setToken} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

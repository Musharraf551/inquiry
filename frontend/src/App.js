import React from "react";
import InquiryForm from "./pages/InquiryForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminInquiriesPage from "./pages/AdminInquiriesPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InquiryForm />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route
          path="/admin/inquiries"
          element={token ? <AdminInquiriesPage /> : <LoginPage setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

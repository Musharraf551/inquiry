import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Login failed");
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.access); // ✅ Save token
        setToken(data.access);
        navigate("/admin/inquiries")
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">🔑 Admin Login</h2>
      <form onSubmit={handleLogin} className="mx-auto p-4 shadow rounded" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

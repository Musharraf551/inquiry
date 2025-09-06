import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListInquiry() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔹 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redirect to login
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Not authorized. Please login.");
      navigate("/login");
      return;
    }

    fetch("http://127.0.0.1:8000/api/inquiries/admin/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or failed to fetch");
        return res.json();
      })
      .then((data) => {
        setInquiries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) return <p className="text-center mt-5">Loading inquiries...</p>;

  return (
    <div className="container mt-5">
      {/* Header with Logout */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">📋 All Inquiries (Admin Only)</h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>

      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Organization</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Message</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inq, index) => (
            <tr key={inq.id}>
              <td>{index + 1}</td>
              <td>{inq.full_name}</td>
              <td>{inq.organization}</td>
              <td>{inq.email}</td>
              <td>{inq.phone}</td>
              <td>{inq.inquiry_type}</td>
              <td>{inq.message}</td>
              <td>{new Date(inq.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}

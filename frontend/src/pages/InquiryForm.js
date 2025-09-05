import { useState } from "react";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaList, FaCommentDots } from "react-icons/fa";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        full_name: "",
        organization: "",
        email: "",
        phone: "",
        inquiry_type: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // ✅ Validation function
    const validate = () => {
        let newErrors = {};
        if (!formData.full_name || formData.full_name.length < 3) {
            newErrors.full_name = "Full name must be at least 3 characters";
        }
        if (!formData.organization) {
            newErrors.organization = "Organization is required";
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        const phonePattern = /^[0-9]{10,15}$/;
        if (!formData.phone || !phonePattern.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number (10–15 digits)";
        }
        if (!formData.inquiry_type) {
            newErrors.inquiry_type = "Please select an inquiry type";
        }
        if (!formData.message || formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/inquiry/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error("Failed to submit inquiry");
            }
            alert("✅ Inquiry submitted successfully!");
            setFormData({
                full_name: "",
                organization: "",
                email: "",
                phone: "",
                inquiry_type: "",
                message: ""
            });
        } catch (error) {
            alert("❌ Failed to submit inquiry.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-lg border-0 rounded-4 p-4 w-100" style={{ maxWidth: "700px" }}>
                <h2 className="text-center text-primary mb-4">✨ Inquire Now</h2>

                <form onSubmit={handleSubmit} className="row g-3">
                    {/* Full name */}
                    <div className="col-md-6">
                        <label className="form-label">
                            <FaUser className="me-2 text-secondary" /> Full Name
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
                            placeholder="Enter full name"
                        />
                        {errors.full_name && <div className="invalid-feedback">{errors.full_name}</div>}
                    </div>

                    {/* Organization */}
                    <div className="col-md-6">
                        <label className="form-label">
                            <FaBuilding className="me-2 text-secondary" /> Organization
                        </label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            className={`form-control ${errors.organization ? "is-invalid" : ""}`}
                            placeholder="Enter organization"
                        />
                        {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                        <label className="form-label">
                            <FaEnvelope className="me-2 text-secondary" /> Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="Work email address"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                        <label className="form-label">
                            <FaPhone className="me-2 text-secondary" /> Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            placeholder="Phone number"
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>

                    {/* Inquiry Type */}
                    <div className="col-12">
                        <label className="form-label">
                            <FaList className="me-2 text-secondary" /> Inquiry Type
                        </label>
                        <select
                            name="inquiry_type"
                            value={formData.inquiry_type}
                            onChange={handleChange}
                            className={`form-select ${errors.inquiry_type ? "is-invalid" : ""}`}
                        >
                            <option value="">-- Please choose an option --</option>
                            <option value="General">General</option>
                            <option value="Support">Support</option>
                            <option value="Sales">Sales</option>
                        </select>
                        {errors.inquiry_type && <div className="invalid-feedback">{errors.inquiry_type}</div>}
                    </div>

                    {/* Message */}
                    <div className="col-12">
                        <label className="form-label">
                            <FaCommentDots className="me-2 text-secondary" /> Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`form-control ${errors.message ? "is-invalid" : ""}`}
                            placeholder="How can we help you?"
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-100 py-2 fw-semibold shadow-sm"
                        >
                            {loading ? "Submitting..." : "🚀 Submit Inquiry"}
                        </button>
                    </div>
                </form>

                <p className="text-center small text-muted mt-3">
                    We will get back to you within 24 hours. <br />
                    We respect your privacy 🤝
                </p>
            </div>
        </div>
    );
}

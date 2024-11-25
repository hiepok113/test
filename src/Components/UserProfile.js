import React, { useState } from "react";
import "./Userprofile.css";

const UserProfile = () => {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "",
    email: "",
    avatar: null, // Avatar file
  });

  const [activeTab, setActiveTab] = useState("profile"); // State to handle active tab

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, avatar: URL.createObjectURL(file) });
    }
  };

  const handleReset = () => {
    setForm({
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "",
      email: "",
      avatar: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved successfully!");
    console.log("Submitted data:", form);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-info">
          <img
            src={form.avatar || "https://via.placeholder.com/100"}
            alt="User Avatar"
            className="profile-avatar"
          />
          <h3>{form.firstName || "First Name"} {form.lastName || "Last Name"}</h3>
        </div>
        <nav>
          <ul>
            <li
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => handleTabChange("profile")}
            >
              Thông tin cá nhân
            </li>
            <li
              className={activeTab === "orders" ? "active" : ""}
              onClick={() => handleTabChange("orders")}
            >
              Quản lý đơn hàng
              {activeTab === "orders" && <span className="right-space"></span>} {/* Display space if selected */}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="profile-content">
        {activeTab === "profile" && (
          <div className="profile-form">
            <h1>Edit My Profile</h1>
            <form onSubmit={handleSubmit}>
              <label>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </label>

              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </label>

              <label>
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                />
              </label>

              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                Avatar
                <input type="file" onChange={handleFileUpload} />
              </label>

              <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={handleReset}>
                  Reset
                </button>
                <button type="button" onClick={() => alert("Cancelled!")}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="orders-content">
            {/* Content for Orders (empty for now) */}
            <p>No orders to display</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserProfile;

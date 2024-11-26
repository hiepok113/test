import React, { useState } from "react";
import "./Userprofile.css";
import users from "./user";  // Giữ nguyên thông tin user
import products from "./products";  // Import dữ liệu sản phẩm từ file product.js

const UserProfile = () => {
  const defaultUser = users[0];

  const [form, setForm] = useState({
    firstName: defaultUser.firstName || "",
    lastName: defaultUser.lastName || "",
    phoneNumber: defaultUser.phoneNumber || "",
    email: defaultUser.email || "",
    avatar: defaultUser.avatar || null,
  });

  const [activeTab, setActiveTab] = useState("profile");

  const [sidebarInfo, setSidebarInfo] = useState({
    firstName: defaultUser.firstName || "",
    lastName: defaultUser.lastName || "",
    avatar: defaultUser.avatar || null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSidebarInfo({
      firstName: form.firstName,
      lastName: form.lastName,
      avatar: form.avatar,
    });

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
            src={sidebarInfo.avatar}
            alt="User Avatar"
            className="profile-avatar"
          />
          <h3>
            {sidebarInfo.firstName} {sidebarInfo.lastName} 
          </h3>
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
              {activeTab === "orders" && <span className="right-space"></span>}
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
              </div>
            </form>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="orders-content">
            <h2>My Orders</h2>
            <div className="order-list">
              {products.map((product) => (
                <div key={product.id} className="order-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="order-item-image"
                  />
                  <div className="order-item-info">
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserProfile;

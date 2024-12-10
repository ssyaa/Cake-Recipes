"use client";

import { useState } from "react";
import axiosClient from "../../utils/axios"; // Pastikan file ini sudah dikonfigurasi

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post("/api/register", form); // Menggunakan endpoint Laravel
            alert(response.data.message || "User registered successfully!");
        } catch (error) {
            console.error("Error:", error.response || error.message);
            alert("Register failed: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <div className="login-page-container">
            <div className="left-content">
                <h2>Welcome to Our Platform</h2>
                <p>Join us and experience the best services.</p>
            </div>
            <div className="right-content">
                <div className="login-box">
                    <h3 className="login-title">Register</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className="input-field"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="input-field"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="input-field"
                        />
                        <button type="submit" className="login-btn">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

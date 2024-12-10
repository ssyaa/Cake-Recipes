"use client";

import React, { useState } from "react";
import axiosClient from "../../utils/axios"; // Pastikan file ini sudah dikonfigurasi

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosClient.post("/api/login", form); // Endpoint Laravel
            alert(`Welcome, ${response.data.user.name}`);
            // Simpan token ke localStorage
            localStorage.setItem("token", response.data.token);
            window.location.href = "/dashboard"; // Redirect ke dashboard
        } catch (error) {
            console.error("Error:", error.response || error.message);
            setErrorMessage(error.response?.data?.message || "Login failed");
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
                <h2>Write your Recipes, let them know it!</h2>
            </div>
            <div className="right-content">
                <div className="login-box">
                    <h1 className="login-title">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-[#4B2E2A] mb-2">Email</label>
                            <input
                                className="input-field"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-[#4B2E2A] mb-2">Password</label>
                            <input
                                className="input-field"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-link">
                            <span>Belum punya akun? </span>
                            <a href="/registered">Daftar</a>
                        </p>
                        <p className="text-link mt-2">
                            <span>Lupa password? </span>
                            <a href="/forgotPassword">Ubah</a>
                        </p>
                    </div>

                    {errorMessage && (
                        <div className="error-message text-red-500 mt-4">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

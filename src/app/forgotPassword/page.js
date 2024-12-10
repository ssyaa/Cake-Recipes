'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/backend/request-reset.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (data.success) {
            router.push('/reset-password/token'); // Redirect ke halaman token
        } else {
            setErrorMessage(data.message);
        }
    };

    return (
        <div className="reset-container">
            <div className="reset-box">
                <h1 className="reset-title">Reset Password</h1>
                <p className="reset-description">
                    Enter your email address below to receive a password reset link.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-[#4B2E2A] mb-2">
                            Email
                        </label>
                        <input
                            className="input-field"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Send Reset Email
                    </button>
                </form>
                {errorMessage && (
                    <div className="error-message text-red-500 mt-4">
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

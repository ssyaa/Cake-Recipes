'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ChangePasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        const response = await fetch('http://localhost/backend/change-password.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });

        const data = await response.json();
        if (data.success) {
            alert('Password updated successfully!');
            router.push('/login'); // Redirect ke halaman login
        } else {
            setErrorMessage(data.message);
        }
    };

    return (
        <div className="reset-container">
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2">New Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your new password"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm-password" className="block mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your new password"
                        required
                    />
                </div>
                <button type="submit" className="btn">Update Password</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
}

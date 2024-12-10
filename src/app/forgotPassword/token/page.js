'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TokenPage() {
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost/backend/verify-token.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        const data = await response.json();
        if (data.success) {
            router.push('/reset-password/change-password'); // Redirect ke halaman ubah password
        } else {
            setErrorMessage(data.message);
        }
    };

    return (
        <div className="reset-container">
            <h1>Enter Token</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="token" className="block mb-2">Token</label>
                    <input
                        type="text"
                        id="token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        placeholder="Enter the token sent to your email"
                        required
                    />
                </div>
                <button type="submit" className="btn">Verify Token</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
}

import React from 'react';

const CallToAction = () => {
    return (
        <section
            className="CallToAction-section relative"
            style={{
                backgroundColor: '#4B2E2A', // Warna coklat soft
                height: '500px', // Bisa disesuaikan dengan kebutuhan
            }}
        >
            {/* Konten teks */}
            <div className="relative z-10 p-8 CallToAction-heading">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Ingin menulis resepmu sendiri?
                </h2>
                <p className="text-m text-white mb-6">
                    Login untuk mulai membuat resep kue kamu sendiri!
                </p>
                <a
                    href="/login"
                    className="bg-yellow-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
                >
                    Login
                </a>
            </div>
        </section>
    );
};

export default CallToAction;

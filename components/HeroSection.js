import React from 'react';
import '../styles/HeroSection.css'; // Mengimpor file CSS untuk animasi

const HeroSection = () => {
    return (
        <section className="hero-section relative bg-orange-400 py-10 text-left">
            {/* Gambar Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images_modern_cake/croissant.jpg" // Path gambar yang benar
                    alt="Welcome Image"
                    className="w-full h-full object-cover opacity-60" // Perbaikan style
                />
            </div>

            {/* Konten */}
            <div className="relative z-10">
                <h1 className="text-4xl font-bold text-white-800 mb-4 hero-heading">
                    Recipes Cake, Bounjour!
                </h1>
                <p className="text-lg text-white-600 hero-paragraph hero-heading">
                    Temukan dan berbagi resep kue tradisional dan modern. <br />
                    Selamat mencoba dan semoga berhasil membuat kue yang lezat!
                </p>
            </div>
        </section>
    );
};

export default HeroSection;

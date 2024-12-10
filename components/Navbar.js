'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';  // Import Link dari Next.js

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); // State untuk status scroll

    useEffect(() => {
        const handleScroll = () => {
        // Jika posisi scroll lebih dari 0, ubah state `isScrolled` menjadi true
        setIsScrolled(window.scrollY > 0);
        };

        // Tambahkan event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
        // Hapus event listener saat komponen unmount
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: "10px 20px",
            backgroundColor: isScrolled ? "rgba(51, 51, 51, 0.9)" : "transparent", // Transparan atau solid
            color: "#fff",
            transition: "background-color 0.3s ease-in-out",
            boxShadow: isScrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none", // Tambahkan shadow jika di-scroll
            display: "flex",
            justifyContent: "space-between", // Menyebarkan elemen ke kiri dan kanan
            alignItems: "center", // Menjaga elemen berada di tengah vertikal
        }}
        >
        <div>
            <Link href="/login">  {/* Menghubungkan ke halaman login */}
            <span
                style={{
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "4px",
                backgroundColor: "#007bff",
                color: "#fff",
                transition: "background-color 0.3s",
                }}
            >
                Login
            </span>
            </Link>
        </div>
        </nav>
    );
}

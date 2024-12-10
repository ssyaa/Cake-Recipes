import React from 'react';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-3/4 md:w-1/2 lg:w-1/3 p-8 space-y-6">
            {/* Avatar and Name */}
            <div className="flex justify-center">
            <div className="relative">
                <img
                src="/images/avatar.jpg"  // Ganti dengan path gambar avatar
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    />
                </svg>
                </div>
            </div>
            </div>

            {/* Name and Bio */}
            <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">Tasya Aulia Putri</h2>
            <p className="text-gray-600 text-sm">Mahasiswa Teknik Informatika | Developer | Gamer</p>
            </div>

            {/* Bio Section */}
            <div>
            <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
            <p className="text-gray-600 text-sm mt-2">
                Saya seorang mahasiswa jurusan Teknik Informatika yang senang mengeksplorasi dunia teknologi, terutama dalam hal pengembangan perangkat lunak dan animasi. Di luar itu, saya suka bermain game dan menulis konten. Selalu terbuka untuk belajar hal baru dan bekerja dengan tim yang kreatif!
            </p>
            </div>

            {/* Contact Info */}
            <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <ul className="space-y-2 mt-2">
                <li className="flex items-center text-sm text-gray-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7 7 7-7"
                    />
                </svg>
                tasya@example.com
                </li>
                <li className="flex items-center text-sm text-gray-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7 7 7-7"
                    />
                </svg>
                linkedin.com/in/tasya-aulia-putri
                </li>
            </ul>
            </div>

            {/* Action Button */}
            <div className="mt-6 flex justify-center">
            <a
                href="/edit-profile"
                className="bg-yellow-400 text-white py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 transition"
            >
                Edit Profile
            </a>
            </div>
        </div>
        </div>
    );
};

export default ProfilePage;

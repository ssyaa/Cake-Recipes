import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-yellow-800 text-white py-4 text-center">
        <p className="text-sm">
            &copy; {new Date().getFullYear()} Website Resep Kue. All Rights Reserved.
        </p>
        <p className="text-sm">
            Made with ❤️ by <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Bocil Roblox</a>
        </p>
        </footer>
    );
};

export default Footer;

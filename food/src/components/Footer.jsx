import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" w-full bg-gray-100  text-black py-2 px-2 mt-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">MyDelo</h2>
          <p className="mt-2">Delicious food, delivered fast!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-500">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#menu" className="hover:text-orange-500">Menu</a></li>
            <li><a href="https://kanhaiya-portfolio-vf06.onrender.com/" className="hover:text-orange-500">About Us</a></li>
            <li><a href="https://kanhaiya-portfolio-vf06.onrender.com/" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2">📍 123 MyDelo, MMDU Mullana, India</p>
          <p>📞 +91 6204285680</p>
          <p>✉️ kanhaiyakumar1750@gmail.com</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
        <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
        <a href="#" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} MyDelo. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

import Logo from "../../public/Logo.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-orange-200 md:px-16 md:py-5 border-b-2 border-orange-200">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center space-x-2">
  <img
    src={Logo.src}
    alt="logo"
    className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
  />
  <h1 className="text-red-800 text-3xl font-bold">Gold Gums</h1>
</Link>

        
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        <li className="text-gray-950 font-semibold text-base cursor-pointer hover:text-black hover:font-bold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-950 font-semibold text-base cursor-pointer hover:text-black hover:font-bold">
          <Link href="/adhesive-product"> Adhesive-Product</Link>
        </li>
        <li className="text-gray-950 font-semibold text-base cursor-pointer hover:text-black hover:font-bold">
          <Link href="/food-product"> Food-Product</Link>
        </li>
        <li className="text-gray-950 font-semibold text-base cursor-pointer hover:text-black hover:font-bold">
          <Link href="/about">About Us</Link>
        </li>
        <li className="text-gray-950 font-semibold text-base cursor-pointer hover:text-black hover:font-bold">
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Contact Button (Visible Only on Larger Screens) */}
      <Link
  href="https://wa.me/919826070900"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:block px-4 py-2 bg-red-800 text-orange-100 rounded hover:bg-red-900"
  onClick={() => setIsOpen(false)} // Optionally close the menu
>
  Message
</Link>


      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-red-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            // Close Icon
            <i className="ri-close-fill text-xl font-semibold text-red-800"></i>
          ) : (
            // Menu Icon
            <i className="ri-menu-line text-xl font-semibold"></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-100 shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li className="hover:text-black text-gray-900 cursor-pointer py-2 font-semibold">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-black text-gray-900 cursor-pointer py-2 font-semibold">
              <Link href="/adhesive-product" onClick={() => setIsOpen(false)}>
                Adhesive-Product
              </Link>
            </li>

            <li className="hover:text-black text-gray-900 cursor-pointer py-2 font-semibold">
              <Link href="/food-product" onClick={() => setIsOpen(false)}>
                Food-Product
              </Link>
            </li>
            <li className="hover:text-black text-gray-900 cursor-pointer py-2 font-semibold">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-black text-gray-900 cursor-pointer py-2 font-semibold">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

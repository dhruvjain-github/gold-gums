"use client";
import React, { useState } from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import Logo from "../../public/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 bg-orange-200 md:px-16 md:py-5 border-b-2 border-orange-200"
      aria-label="Main Navigation"
    >
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
        <Image
          src={Logo.src}
          alt="Gold Gums Logo"
          width={40}
          height={40}
          priority
          className="cursor-pointer"
        />
        <h1 className="text-red-800 text-3xl font-bold">Gold Gums</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8" role="menubar">
        <li role="menuitem">
          <Link href="/" className="text-gray-950 font-semibold hover:text-black">
            Home
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/adhesive-product" className="text-gray-950 font-semibold hover:text-black">
            Adhesive-Product
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/food-product" className="text-gray-950 font-semibold hover:text-black">
            Food-Product
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/about" className="text-gray-950 font-semibold hover:text-black">
            About Us
          </Link>
        </li>
        <li role="menuitem">
          <Link href="/contact" className="text-gray-950 font-semibold hover:text-black">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <Link
        href="https://wa.me/919826070900"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block px-4 py-2 bg-red-800 text-orange-100 rounded hover:bg-red-900"
        aria-label="Message on WhatsApp"
      >
        Message
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-red-800 focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle Menu"
      >
        <i className={isOpen ? "ri-close-fill text-xl" : "ri-menu-line text-xl"}></i>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-orange-100 shadow-md"
          role="menu"
        >
          <ul className="flex flex-col items-center py-4">
            <li role="menuitem">
              <Link href="/" className="hover:text-black py-2 font-semibold" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="/adhesive-product"
                className="hover:text-black py-2 font-semibold"
                onClick={toggleMenu}
              >
                Adhesive-Product
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="/food-product"
                className="hover:text-black py-2 font-semibold"
                onClick={toggleMenu}
              >
                Food-Product
              </Link>
            </li>
            <li role="menuitem">
              <Link href="/about" className="hover:text-black py-2 font-semibold" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li role="menuitem">
              <Link
                href="/contact"
                className="hover:text-black py-2 font-semibold"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

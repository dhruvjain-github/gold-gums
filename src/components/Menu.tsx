"use client"
import React, { useState } from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  const products = [
    "Adhesives for Corrugated Boxes",
    "Adhesives for Paper Tubes",
    "Adhesives for Paper Cones",
    "Adhesives for Book Binding",
    "Adhesives for Bottle Labeling",
    "Dextrines: Versatile Solutions",
    "Modified Starches",
    "Thin Boiling Starches",
    "High-Speed Bonding Adhesives",
    "Packaging Adhesives",
    "Industrial Grade Adhesives",
    "Custom Adhesive Solutions",
    "Specialty Adhesives",
    "Eco-Friendly Adhesives",
    "Heat Resistant Adhesives",
    "Food Grade Adhesives",
    "Pressure Sensitive Adhesives",
    "Waterproof Adhesives",
    "Low-VOC Adhesives",
    "High-Strength Adhesives",
  ];

  // State to toggle "Show More" functionality
  const [showAll, setShowAll] = useState(false);

  // Determine the number of products to display
  const visibleProducts = showAll ? products : products.slice(0, Math.ceil(products.length / 2));

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mt-10 mb-8 text-center text-gray-900">
        All Manufactured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="p-4">
              <h2 className="text-base font-semibold text-gray-700 leading-tight mb-2">
                {product}
              </h2>
              <p className="text-sm text-gray-500">
                High-performance adhesive solutions for diverse industries.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {/* Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-gray-100 text-red-800 rounded hover:border-2 hover:border-red-800 text-sm font-medium shadow-md transition-transform duration-150 transform "
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/contact"
          className="px-6 py-3 bg-red-800 text-gray-100 rounded-lg hover:bg-red-900 text-sm font-medium shadow-md transition-transform duration-150 transform hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Menu;

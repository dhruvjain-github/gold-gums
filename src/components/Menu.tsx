"use client";
import React, { useState } from "react";
import Link from "next/link";

interface MenuProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const Menu: React.FC<MenuProps> = ({
  backgroundcolor,
  headingcolor,
  iconcolor,
  boxcolor,
}) => {
  const products = [
    "Manufacturer of Adhesives for Corrugated Boxes (Automatic & Semiautomatic Plants)",
    "Papcr Tubes",
    "Paper Cone",
    "Book Binding",
    "Bottel Labelling Industries",
    "Dextrines",
    "Modified Starches",
    "Thin Boiling Starches",
    "Starch Glue",
    "Lye",
    "Caramel Colors",
    "Other Starch Based Products",
    "Arrowroot (Starch)",
    "Corn Flour",
    "Custard Powder",
    "Flour",
    "Dextrin",
    "Liquid Glucose",
    "Glucose Powder",
    "Gum Paste",
    "Dona Lamination",
    "Gum Powder Bags",
  ];

  // State to toggle "Show More" functionality
  const [showAll, setShowAll] = useState(false);

  // Determine the number of products to display
  const visibleProducts = showAll
    ? products
    : products.slice(0, Math.ceil(products.length / 2));

  return (
    <div className={`${backgroundcolor} w-full py-10`}>
      {/* Heading */}
      <h1 className={`text-3xl font-bold text-center ${headingcolor} mb-6`}>
        Our Manufactured Products
      </h1>
      <div className={`${boxcolor} p-6 max-w-4xl mx-auto rounded-md shadow-lg`}>
        {/* Product List with Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleProducts.map((product, index) => (
            <div key={index} className="text-xl font-medium text-gray-800">
              <i className="ri-checkbox-blank-circle-fill text-base text-red-800"></i>{" "}
              {product}
            </div>
          ))}
        </div>

        {/* Show More / Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-6 py-2 text-sm font-medium ${iconcolor} bg-gray-200 rounded-md shadow-md transition-transform duration-150 hover:scale-105`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mt-4">
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-medium text-white bg-red-800 rounded-lg shadow-md hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

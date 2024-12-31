"use client";
import React, { useRef } from "react";

interface ProductOverviewProps {
  header: string;
  description: string;
  products: { title: string; description: string }[];
}

const Productoverview: React.FC<ProductOverviewProps> = ({ header, description, products }) => {
  const moreInfoRef = useRef<HTMLDivElement | null>(null);

  // Scroll function
  const handleLearnMoreClick = () => {
    if (moreInfoRef.current) {
      moreInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 md:px-12 my-10 md:my-20">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black">{header}</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">{description}</p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="h-40 bg-gray-300 flex items-center justify-center rounded">
              {/* Placeholder for image */}
            </div>
            <h3 className="mt-4 text-xl font-bold text-black">{product.title}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="my-10 flex justify-start">
        <button
          className="text-sm font-medium text-white bg-red-800 py-3 px-6 hover:bg-red-900"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Productoverview;

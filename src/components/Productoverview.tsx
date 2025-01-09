"use client"
import React, { useRef } from "react";
import ProductSideNavbar from "./ProductSideNavbar";
import Link from "next/link";
import Image from "next/image";

// Defining the type for product props.
interface Product {
  title: string;
  description: string;
  imgLink: string;
}

interface ProductOverviewProps {
  header: string;
  description: string;
  products: Product[]; // Updated type
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const Productoverview: React.FC<ProductOverviewProps> = ({
  header,
  description,
  products,
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  const moreInfoRef = useRef<HTMLDivElement | null>(null);

  // Scroll function
  const handleLearnMoreClick = (): void => {
    if (moreInfoRef.current) {
      moreInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`p-3 md:px-10 md:py-20 ${backgroundcolor} lg27:px-64`}>
      {/* Flex Container for Sidebar and Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Sidebar */}
        <div className="md:w-auto">
          <ProductSideNavbar
            backgroundcolor={backgroundcolor}
            headingcolor={headingcolor}
            textcolor={textcolor}
            boxcolor={boxcolor}
            iconcolor="text-red-800" // Ensure iconcolor is passed if needed
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className={`text-4xl font-bold ${headingcolor}`}>{header}</h1>
            <p className={`mt-4 ${textcolor} lg27:text-lg  max-w-2xl font-semibold`}>{description}</p>
          </div>

          {/* Products Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className={`p-4 rounded-lg shadow ${boxcolor}`}>
                <div className="h-40 bg-orange-300 flex items-center justify-center rounded">
                  <Image
                    src={product.imgLink}
                    alt={product.title}
                    className="object-cover h-full w-full rounded"
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </div>
                <h3 className={`mt-4 text-xl font-bold ${headingcolor}`}>{product.title}</h3>
                <p className={`mt-2 ${textcolor}`}>{product.description}</p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="my-10 flex justify-start">
            <Link
              href={"/adhesive-product/auto-plant-adhesive"}
              className="text-sm font-medium text-white bg-red-800 py-3 px-6 hover:bg-red-900"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Link>
          </div>

          {/* More Info Section (Placeholder) */}
          <div ref={moreInfoRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Productoverview;

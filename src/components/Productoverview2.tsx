"use client"
import React, { useRef } from "react";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import StaticImage from "../../public/StaticImageData.png";  // Import the image as a value

interface ProductOverviewProps {
  header: string;
  description: string;
  products: { title: string; description: string; imgLink: string | typeof StaticImage }[]; // Use typeof StaticImage
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const Productoverview2: React.FC<ProductOverviewProps> = ({
  header,
  description,
  products,
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  const moreInfoRef = useRef<HTMLDivElement | null>(null);

  const handleLearnMoreClick = () => {
    moreInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`px-6 md:px-12 py-10 md:py-20 ${backgroundcolor} lg27:px-64`}>
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center text-red-800 py-2 rounded">
          <Link href="/">
            <Image
              src={Logo}
              alt="Gold Gums Logo"
              className="h-8 w-8 md:h-10 md:w-10 cursor-pointer text-3xl font-bold"
            />
          </Link>
        </div>
        <h1 className={`text-4xl font-bold ${headingcolor}`}>{header}</h1>
        <p className={`mt-4 ${textcolor} max-w-2xl font-semibold lg27:text-lg `}>{description}</p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className={`p-4 rounded-lg shadow ${boxcolor}`}>
            <div className="h-40 bg-orange-300 flex items-center justify-center rounded overflow-hidden">
              <Image
                src={product.imgLink}
                alt={product.title}
                className="object-cover h-full w-full"
                width={160}
                height={160}
              />
            </div>
            <h3 className={`mt-4 text-xl font-bold ${headingcolor}`}>
              {product.title}
            </h3>
            <p className={`mt-2 ${textcolor}`}>{product.description}</p>
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

      {/* Placeholder for more info */}
      <div ref={moreInfoRef} className="pt-20"></div>
    </div>
  );
};

export default Productoverview2;

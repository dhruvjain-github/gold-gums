"use client";
import React from "react";
import Image from "next/image";

const Hero2 = ({ backgroundcolor, headingcolor, textcolor }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-8 ${backgroundcolor}`}>
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-left">
        {/* Icon or Logo */}
        <div className="mb-4">
          <img
            src="/path/to/your/icon.png"
            alt="Icon"
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </div>
        {/* Heading */}
        <h2 className={`text-3xl md:text-5xl font-bold ${headingcolor} mb-4 leading-tight`}>
          <span>25+ years</span> of Excellence in Industrial Adhesive Solutions
        </h2>
        {/* Description */}
        <p className={`text-sm md:text-lg leading-relaxed font-semibold ${textcolor}`}>
          With 25 years of expertise, Gold Gums has become a trusted name in the adhesive industry. Our dedicated team of engineers conducts detailed research and testing to develop innovative adhesive solutions. From corrugated boxes to industrial applications, we focus on creating products that deliver superior strength, durability, and versatility, ensuring the highest quality standards for businesses across Central India.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative bg-orange-200 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <Image
            src="/ggHero1-1.jpeg" // Path to the image in the public folder
            alt="Industrial Adhesive Solutions" // Descriptive alt text for accessibility
            layout="fill" // Ensures the image covers the box fully
            objectFit="cover" // Ensures the image covers the box properly
            objectPosition="top" // Ensures the image shows from the top
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Optional Icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

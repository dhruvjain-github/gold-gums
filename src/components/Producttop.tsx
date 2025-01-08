import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";

interface ProducttopProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?: string;
  title?: string; // Dynamic title
  description?: string; // Dynamic description
  logoAlt?: string; // Dynamic alt text for the logo
  logoRedirectLink?: string; // Link for the logo
}

const Producttop: React.FC<ProducttopProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
  id,
  title = "High-Performance Adhesives for Sustainable Paper Applications", // Default title
  description = "High-quality adhesives for corrugated boxes, paper cones, and tubes, ensuring strong and durable packaging.", // Default description
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center ${backgroundcolor} py-10 md:py-20 border-t border-b border-orange-900 md:border-0`}
    >
      {/* Logo container */}
      <div className="flex items-center bg-orange-200 mt-8 md:mt-12 text-red-800 px-2 py-2 border-2 border-red-800 rounded mb-5 ">
        
          <Image
            src={Logo.src}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10"
            width={40}
            height={40}
          />
        
      </div>

      {/* Centered box container */}
      <div className={`${boxcolor} rounded-md p-6 shadow-lg flex flex-col items-center`}>
        {/* Heading */}
        <h1 className={`text-2xl md:text-3xl font-bold mb-4 text-center ${headingcolor}`}>
          {title}
        </h1>
        {/* Description */}
        <p className={`text-base md:text-lg font-medium text-center ${textcolor}`}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Producttop;

import React from "react";
import Logo from "../../public/Logo.svg";
import Link from "next/link";

interface ProducttopProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?: string;
}

const FoodProducttop: React.FC<ProducttopProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
  id,
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center ${backgroundcolor} py-10 md:py-20 border-t border-b border-orange-900 md:border-0`}
    >
      {/* Logo container */}
      <div className="flex items-center bg-orange-200 mt-8 md:mt-12 text-red-800 px-2 py-2 border-2 border-red-800 rounded mb-5">
        <Link href="/">
          <img
            src={Logo.src}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
          />
        </Link>
      </div>

      {/* Centered content box */}
      <div className={`${boxcolor} rounded-md px-8 py-6 shadow-lg`}>
        <h1 className={`text-3xl font-bold mb-2 text-center ${headingcolor}`}>
          Food Products
        </h1>
        <p className={`text-base font-semibold text-center ${textcolor}`}>
          Discover our extensive range of high-quality Food-grade and related
          products tailored for your needs.
        </p>
      </div>
    </section>
  );
};

export default FoodProducttop;

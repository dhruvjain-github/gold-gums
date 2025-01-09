"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.svg"; // Ensure Logo is a valid image path
import ggHero2 from "../../public/ggHero2-1.jpeg"; // Ensure ggHero2 is a valid image path

interface PromotingProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor?: string; 
}

const Promoting: React.FC<PromotingProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
}) => {
  return (
    <div className={`${backgroundcolor} px-6 md:px-12 py-8 lg27:px-64`}>
      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center my-16">
        <div>
          {/* Logo */}
          <div className="flex items-center mt-8 md:mt-20 text-red-800 py-2 rounded">
            <Link href="/">
              <Image
                src={Logo}
                alt="Gold Gums Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Heading */}
          <h1
            className={`text-3xl md:text-5xl font-bold ${headingcolor} mb-6 leading-tight`}
          >
            Experience Unmatched Bonding Performance with Gold Gums
          </h1>

          {/* Description */}
          <p className={`${textcolor} mb-8 leading-relaxed font-semibold lg27:text-lg`}>
            Choosing Gold Gums means investing in top-quality adhesive
            solutions that enhance your operations. With over two decades of
            industry experience, we guarantee reliability and excellence in
            every product.
          </p>

          {/* Call to Action */}
          <div className="flex gap-4">
            <Link
              href="/adhesive-product"
              className="md:px-6 md:py-3 py-2 px-3 border border-red-800 font-semibold bg-red-800 text-white transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <div className="relative bg-orange-200 rounded-lg w-full h-[300px] md:h-[400px] overflow-hidden lg27:h-[500px]">
            <Image
              src={ggHero2}
              alt="Industrial Adhesive Solutions"
              className="object-cover rounded-lg"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image scales properly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoting;

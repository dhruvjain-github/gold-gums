"use client";
import React from "react";
import Image from "next/image";

type Hero2Props = {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
};

const Hero2: React.FC<Hero2Props> = ({ backgroundcolor, headingcolor, textcolor }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 lg27:px-64 py-8 ${backgroundcolor}`}>
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-left">
        {/* Heading */}
        <h2 className={`text-3xl md:text-5xl font-bold ${headingcolor} mb-4 leading-tight `}>
          <span>25+ years</span> of Excellence in Industrial Adhesive Solutions
        </h2>
        {/* Description */}
        <p className={`text-sm md:text-lg leading-relaxed font-semibold ${textcolor} lg27:text-xl`}>
          With 25 years of expertise, Gold Gums has become a trusted name in the adhesive industry. Our dedicated team of engineers conducts detailed research and testing to develop innovative adhesive solutions. From corrugated boxes to industrial applications, we focus on creating products that deliver superior strength, durability, and versatility, ensuring the highest quality standards for businesses across Central India.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative bg-orange-200 w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-orange-950">
          <Image
            src="/ggHero2-1-1.jpeg"
            alt="Industrial Adhesive Solutions"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;

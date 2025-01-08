import React from "react";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";

interface ContactHeroProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
  id?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({
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
      {/* Logo */}
      <div className="flex items-center bg-orange-200 mt-8 md:mt-12 text-red-800 px-2 py-2 border-2 border-red-800 rounded">
        <Link href="/">
          <Image
            src={Logo.src}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
            width={40}
            height={40}
          />
        </Link>
      </div>

      {/* Centered box container */}
      <div className={`${boxcolor} rounded-md p-6 shadow-lg flex flex-col items-center mt-4`}>
        {/* Heading */}
        <h1
          className={`text-2xl md:text-3xl font-bold mb-4 text-center ${headingcolor}`}
        >
          Get in Touch With Us
        </h1>
        {/* Description */}
        <p
          className={`text-base md:text-lg font-medium text-center ${textcolor}`}
        >
          We&apos;re here to assist you with inquiries, support, and product
          information. Reach out today!
        </p>
      </div>
    </section>
  );
};

export default ContactHero;

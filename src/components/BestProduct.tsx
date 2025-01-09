"use client";
import React from "react";
import Link from "next/link";

type Product = {
  iconClass: string;
  title: string;
  description: string;
  link: string;
};

type BestProductProps = {
  backgroundcolor: string;
  boxcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
};

const BestProduct: React.FC<BestProductProps> = ({
  backgroundcolor,
  boxcolor,
  headingcolor,
  textcolor,
  iconcolor,
}) => {
  // Placeholder function for optional menu close behavior
  const setIsOpen = () => {
    console.log("Menu closed (if applicable).");
  };

  const products: Product[] = [
    {
      iconClass: "ri-box-3-fill",
      title: "Adhesives for Corrugated Boxes and More",
      description:
        "Our adhesives are suitable for automatic and semiautomatic plants, offering reliable bonding strength.",
      link: "/adhesive-product",
    },
    {
      iconClass: "ri-book-3-fill",
      title: "Liquid Glucose & Starch-Based Products",
      description:
        "We provide premium liquid glucose and starch products, ensuring consistent performance across industries.",
      link: "/food-product",
    },
    {
      iconClass: "ri-sticky-note-2-fill",
      title: "Dextrines and Modified Starches for Versatile Applications",
      description:
        "Choose our dextrines and modified starches, designed for diverse industrial applications with reliable results.",
      link: "/adhesive-product",
    },
    {
      iconClass: "ri-stack-fill",
      title: "Durable Plastic Sacks for Efficient Packaging",
      description:
        "Our durable plastic sacks and starch glue deliver superior performance in packaging and industrial use.",
      link: "/food-product",
    },
  ];
  

  return (
    <div className={`${backgroundcolor} px-6 md:px-12 py-8 lg27:px-64`}>
      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16 md:my-24">
        <div>
          <h1 className={`text-3xl md:text-5xl font-bold ${headingcolor} mb-6`}>
            Explore Our Comprehensive Product Offerings
          </h1>
          <p className={`${textcolor} mb-8 leading-relaxed font-semibold lg27:text-xl `}>
            At Gold Gums, we take pride in offering a diverse range of adhesive
            solutions specifically designed for the unique needs of various
            industries. Our products include high-performance corrugated
            adhesives, modified starch, liquid glucose, and specialized bags,
            among many others. These adhesives are engineered to deliver
            superior bonding strength for applications such as packaging,
            labeling, and more, ensuring reliable and durable results across
            multiple sectors.
          </p>
          <div className="flex gap-4">
            <Link
              href="/adhesive-product"
              className="md:px-6 md:py-3 py-2 px-3 border border-red-800 font-semibold bg-red-800 text-white transition duration-300"
            >
              Learn More
            </Link>
            <Link
              href="https://wa.me/919826070900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-red-800 font-semibold"
              onClick={setIsOpen}
            >
              Contact
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg27:gap-8 lg27:ml-20  ">
          {products.map((product, index) => (
            <Link href={product.link} key={index} passHref>
              <div
                className={`flex flex-col items-start text-left ${boxcolor} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer lg27:w-0.5`}
                style={{ minWidth: "280px" }}
              >
                <i className={`${product.iconClass} ${iconcolor} text-4xl mb-4`}></i>
                <h3 className={`text-lg font-semibold ${headingcolor} lg27:text-2xl`}>
                  {product.title}
                </h3>
                <p className={`text-sm ${textcolor} mt-2 lg27:text-base`}>
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;

import React from "react";
import Link from "next/link";

const BestProduct = ({ backgroundcolor, boxcolor, headingcolor, textcolor, iconcolor }) => {
  return (
    <div className={`${backgroundcolor} px-6 md:px-12 py-8`}>
      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16 md:my-24">
        <div>
          
          <h1 className={`text-3xl md:text-5xl font-bold ${headingcolor} mb-6`}>
            Explore Our Comprehensive Product Offerings
          </h1>
          <p className={` ${textcolor} mb-8 leading-relaxed font-semibold`}>
          At Gold Gums, we take pride in offering a diverse range of adhesive solutions specifically designed for the unique needs of various industries. Our products include high-performance corrugated adhesives, modified starch, liquid glucose, and specialized bags, among many others. These adhesives are engineered to deliver superior bonding strength for applications such as packaging, labeling, and more, ensuring reliable and durable results across multiple sectors.
          </p>
          <div className="flex gap-4">
            <Link
              href="/product"
              className={`md:px-6 md:py-3 py-2 px-3 border border-red-800 font-semibold bg-red-800 text-white transition duration-300`}
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-red-800 font-semibold"
            >
              Contact
              <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ iconClass: "ri-box-3-fill", title: "Adhesives for Corrugated Boxes and More", description: "Our adhesives are perfect for both automatic and semiautomatic plants." },
            { iconClass: "ri-book-3-fill", title: "Liquid Glucose & Starch-Based Products.", description: "Premium liquid glucose and starch-based products for diverse industrial applications, ensuring consistent performance." },
            { iconClass: "ri-sticky-note-2-fill", title: "Dextrines and Modified Starches for Versatile Applications", description: "Our range includes dextrines and modified starches for various industrial uses." },
            { iconClass: "ri-stack-fill", title: "Durable Plastic Sacks for Efficient Packaging", description: "Explore our starch glue, caramel colors, and more." }]
            .map((product, index) => (
              <div
                key={index}
                className={`flex flex-col items-start text-left ${boxcolor} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                style={{ minWidth: "280px" }}
              >
                <i
                  className={`${product.iconClass} ${iconcolor} text-4xl mb-4`}
                ></i>
                <h3 className={`text-lg font-semibold ${headingcolor}`}>
                  {product.title}
                </h3>
                <p className={`text-sm ${textcolor} mt-2`}>
                  {product.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;

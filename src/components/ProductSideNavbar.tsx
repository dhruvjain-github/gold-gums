import React from "react";
import Link from "next/link";

interface ProductSideNavbarProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductSideNavbar: React.FC<ProductSideNavbarProps> = ({
  backgroundcolor,
  iconcolor,

}) => {
  return (
    <div className={`bg-orange-300 rounded-md md:mt-10 md:p-4 ${backgroundcolor}`}>
      {/* Wrapper for Responsive Design */}
      <div className={`bg-orange-900 p-2 rounded-md shadow-lg md:p-6 md:flex md:flex-col lg:w-64 md:w-full`}>
        {/* Header */}
        <h3 className={`text-orange-200 text-2xl font-bold mb-3 md:mb-6 md:text-left`}>
          Explore Our Paper Adhesive Product
        </h3>

        {/* Product Links */}
        <ul className="grid grid-cols-2 md:block gap-4 md:space-y-4">
          {[
            { id: "auto-plant-adhesive", name: "Automatic-plant Corrugated Adhesive" },
            { id: "semiauto-plant-adhesive", name: "Semiautomatic-plant Corrugated Adhesive" },
            { id: "paper-tube", name: "Paper-Tube Adhesive" },
            { id: "paper-cone", name: "Paper-Cone Adhesive" },
            { id: "dona-pasting", name: "Paper-plate Adhesive Dona Lamination" },
            { id: "book-binding", name: "Book binding Adhesive/Gum paste" },
          ].map((product) => (
            <li key={product.id} className="hover:bg-orange-800 transition-colors duration-200 rounded-md">
              <Link
                href={`/adhesive-product/${product.id}`}
                className={` px-4 py-2 text-orange-100 hover:text-orange-300 border-b-2 border-orange-300 flex justify-between items-center font-semibold`}
              >
                <span>{product.name}</span>
                <i className={`ri-arrow-right-s-line ${iconcolor} text-orange-300 `}></i>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default ProductSideNavbar;

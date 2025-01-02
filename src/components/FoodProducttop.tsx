import React from "react";

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
      className={`md:py-20 flex items-center justify-center ${backgroundcolor} border-t border-b border-orange-900 md:border-0`}
    >
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

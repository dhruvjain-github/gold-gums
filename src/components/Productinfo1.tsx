import React from "react";

interface ProductInfo1Props {
    title: string;
    description: string;
    imgLink: string;
    }

const Productinfo1: React.FC<ProductInfo1Props> = ({title,description,imgLink}) => {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-20">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            {title}
        </h1>
        <p className="mt-4 text-gray-600">
            {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-64 md:w-80 md:h-80 bg-gray-300 flex items-center justify-center rounded mt-8 md:mt-0 md:mr-40">
        {/* Image tag to display an image */}
        <img
          src={imgLink}
          //  {/* Replace this URL with your image URL */}
          alt="Product"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Productinfo1;

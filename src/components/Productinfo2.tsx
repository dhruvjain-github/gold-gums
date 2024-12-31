import React from "react";

interface ProductInfo2Props {
  title: string;
  description: string;
  points: string[];
  imgLink:string
}

const Productinfo2: React.FC<ProductInfo2Props> = ({ title, description, points,imgLink }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-20">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">{title}</h1>
        <p className="mt-4 text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2 text-gray-600">
          {points.map((point, index) => (
            <li className="font-semibold" key={index}>
              <i className="ri-checkbox-circle-fill text-red-800 text-lg"></i> {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full h-64 md:w-80 md:h-80 bg-gray-300 flex items-center justify-center rounded mt-8 md:mt-0 md:mr-40">
        <img
          src={imgLink}
          alt="Product"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Productinfo2;

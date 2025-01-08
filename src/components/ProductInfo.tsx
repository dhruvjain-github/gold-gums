import React from "react";
import Image from "next/image";

interface ProductInfoProps {
  title: string;
  description: string;
  imgLink: string;
  headingcolor: string;
  textcolor: string;
  advantages?: string[]; // Optional props
  applications?: string[]; // Optional props
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  description,
  imgLink,
  headingcolor,
  textcolor,
  advantages = [], // Default to an empty array
  applications = [], // Default to an empty array
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-10 md:py-20 gap-8">
      {/* Text Section */}
      <div className="flex-1 max-w-3xl"> {/* Constrain the maximum width */}
        {/* Title and Description */}
        <div>
          <h1 className={`text-3xl md:text-4xl font-bold leading-tight ${headingcolor}`}>
            {title}
          </h1>
          <p className={`mt-4 text-lg font-semibold ${textcolor} max-w-3xl`}>
            {description}
          </p>
        </div>

        {/* Advantages and Applications */}
        <div className="mt-8">
          <div className="mb-6">
            <h3 className={`text-xl font-bold ${headingcolor}`}>Advantages</h3>
            <ul className={`list-disc list-inside mt-2 ${textcolor}`}>
              {advantages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`text-xl font-bold ${headingcolor}`}>Applications</h3>
            <ul className={`list-disc font-semibold list-inside mt-2 ${textcolor}`}>
              {applications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-80 md:h-80 bg-gray-300 flex items-center justify-center rounded shadow-md border-2 border-orange-900">
        <Image
          src={imgLink}
          alt={title}
          className="w-full h-full object-cover rounded"
          width={320}
          height={320}
        />
      </div>
    </div>
  );
};

export default ProductInfo;

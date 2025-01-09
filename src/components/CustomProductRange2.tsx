import React from "react";
import Hot from "../../public/Hot.jpeg";
import Corrugated from "../../public/Corrugated.jpeg";
import Image from "next/image";

interface CustomProductRangeProps {
  styles: {
    backgroundcolor: string;
    headingcolor: string;
    textcolor: string;
    boxcolor: string;
  };
}

const CustomProductRange2: React.FC<CustomProductRangeProps> = ({ styles }) => {
  const products = [
    {
      category: "Corrugation Adhesives",
      subProducts: [
        {
          name: "Corrugation Ready Mix",
          description: `Corrugation Ready Mix is an off-white powder with superb bonding and consistent quality.`,
          details: [
            { label: "Appearance", value: "Off white powder" },
            { label: "Moisture", value: "14% max" },
            { label: "Viscosity", value: "28 ± 10 Seconds" },
            { label: "Gelatinization Temperature", value: "63 ± 2°C" },
            { label: "Shelf Life", value: "Six Months" },
            { label: "Advantages", value: "Ready to use within a few minutes, providing instant usability." },
          ],
          imageSrc: Hot.src,
        },
        {
          name: "Corrugation Two Step",
          description: `Corrugation Two Step ensures long-lasting performance with strong adhesion and reduced costs.`,
          details: [
            { label: "Appearance", value: "Off white powder" },
            { label: "Moisture", value: "14% max" },
            { label: "Viscosity", value: "28 ± 10 Seconds" },
            { label: "Gelatinization Temperature", value: "63 ± 2°C" },
            { label: "Shelf Life", value: "Six Months" },
            { label: "Advantages", value: "High mileage and low consumption, reducing overall costs." },
          ],
          imageSrc: Corrugated.src,
        },
      ],
    },
  ];

  return (
    <div className={`mt-10 w-full p-5 rounded-lg shadow-md ${styles.boxcolor}`}>
      <h2 className={`text-3xl font-extrabold mb-6 ${styles.headingcolor}`}>
        Product Range
      </h2>
      <ul className="space-y-8">
        {products.map((product, index) => (
          <li key={index}>
            <div className={`p-4 rounded-md shadow-sm ${styles.backgroundcolor}`}>
              <h3 className={`text-2xl font-bold mb-6 lg27:text-4xl ${styles.headingcolor}`}>
                {product.category}
              </h3>
              <ul className="space-y-6">
                {product.subProducts.map((subProduct, subIndex) => (
                  <li
                    key={subIndex}
                    className={`flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-4 rounded-md shadow-md ${styles.boxcolor}`}
                  >
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold ${styles.headingcolor} lg27:text-2xl`}>
                        {subProduct.name}
                      </h4>
                      <p className={`mt-2 text-base font-medium ${styles.textcolor} lg27:text-lg`}>
                        {subProduct.description}
                      </p>
                      {subProduct.details && (
                        <div
                          className={`mt-4 space-y-2 text-sm font-medium ${styles.textcolor} lg27:text-base`}
                        >
                          {subProduct.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                              <span className="font-bold">{detail.label}: </span>
                              <span>{detail.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 lg27:w-1/4">
                      <Image
                        src={subProduct.imageSrc}
                        alt={subProduct.name}
                        className="w-full h-[24rem] object-cover rounded-lg"
                        width={320}
                        height={320}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomProductRange2;

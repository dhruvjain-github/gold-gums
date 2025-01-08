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

const CustomProductRange2:React.FC<CustomProductRangeProps> = ({ styles }) => {
  const products = [
    {
      category: "Corrugation Adhesives",
      subProducts: [
        {
          name: "Corrugation Ready Mix",
          description: `
            Corrugation Ready Mix is an off-white powder with the following characteristics:
            Appearance: Off white powder. Moisture: 14% max. Viscosity: 28 ± 10 Seconds 
            (Depending upon the requirement). Gelatinization Temperature: 63 ± 2°C. 
            Penetration: Normal. Paste Clarity: Opaque. Coverage: Good. Bonding: Superb. 
            Setting: Fastest. Delamination: No. Fermentation: No. Toxicity: No. Shelf Life: Six Months.
            
            Features: This product is ready to use within a few minutes, providing instant usability. 
            Its low viscosity offers high mileage, reduces consumption, and improves pin adhesion. 
            Consistent quality ensures a long storage life. It dries within the required time, 
            enabling faster machine speeds and higher production. With high solids content, 
            it ensures perfect and superior bonding with no risk of delamination. Additionally, 
            it facilitates in-house glue making when required, offering flexibility and reliability.
          `,
          imageSrc: Hot.src,
        },
        {
          name: "Corrugation Two Step",
          description: `
            Corrugation Two Step is an off-white powder with the following specifications:
            Appearance: Off white powder. Moisture: 14% max. Viscosity: 28 ± 10 Seconds 
            (Depending upon the requirement). Gelatinization Temperature: 63 ± 2°C. 
            Penetration: Normal. Paste Clarity: Opaque. Coverage: Good. Bonding: Superb. 
            Setting: Fastest. Delamination: No. Fermentation: No. Toxicity: No. Shelf Life: Six Months.

            Features: The product is ready to use within minutes, minimizing downtime and enhancing 
            productivity. It provides high mileage and low consumption, reducing overall operational 
            costs. With superior bonding and no chance of delamination, it ensures long-lasting 
            performance. High solids content guarantees perfect bonding and strong adhesion. 
            This product allows for in-house glue making whenever needed. The user-adjustable ratio 
            ensures optimal viscosity, allowing precise application as per requirement. However, 
            it may settle in the container over time when unused.
          `,
          imageSrc: Corrugated.src,
        },
      ],
    },
  ];

  return (
    <div className={`mt-10 w-full p-5 rounded-lg shadow-md ${styles.boxcolor}`}>
      <h2 className={`text-3xl font-extrabold mb-6 ${styles.headingcolor}`}>
        Product Range 2
      </h2>
      <ul className="space-y-8">
        {products.map((product, index) => (
          <li key={index}>
            <div className={`p-4 rounded-md shadow-sm ${styles.backgroundcolor}`}>
              <h3 className={`text-2xl font-bold mb-6 ${styles.headingcolor}`}>
                {product.category}
              </h3>
              <ul className="space-y-6">
                {product.subProducts.map((subProduct, subIndex) => (
                  <li
                    key={subIndex}
                    className={`flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-4 rounded-md shadow-md ${styles.boxcolor}`}
                  >
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold ${styles.headingcolor}`}>
                        {subProduct.name}
                      </h4>
                      <p className={`mt-2 text-base font-medium ${styles.textcolor}`}>
                        {subProduct.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3">
                      {/* Reduced the image width */}
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

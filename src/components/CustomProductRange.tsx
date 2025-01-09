import React from "react";
import Super from "../../public/Super.jpeg";
import Regular from "../../public/Regular.jpeg";
import Economy from "../../public/Economy.jpeg";
import Special from "../../public/Special.jpeg";
import Hot from "../../public/Hot.jpeg";
import Image from "next/image";

interface CustomProductRangeProps {
  styles: {
    backgroundcolor: string;
    headingcolor: string;
    textcolor: string;
    boxcolor: string;
  };
}

const CustomProductRange: React.FC<CustomProductRangeProps> = ({ styles }) => {
  const products = [
    {
      category: "Cold Pesting Gum",
      subProducts: [
        {
          name: "Pesting Gum Super",
          description: "Pure starch-based with extra resins and dryers.",
          imageSrc: Super.src,
        },
        {
          name: "Pesting Gum Regular",
          description: "Standard quality for versatile use.",
          imageSrc: Regular.src,
        },
        {
          name: "Pesting Gum Economy",
          description: "Cost-effective option for basic needs.",
          imageSrc: Economy.src,
        },
        {
          name: "Pesting Gum Special",
          description: "Premium adhesive for high-performance needs.",
          imageSrc: Special.src,
        },
      ],
    },
    {
      category: "Hot Pesting Gum",
      subProducts: [
        {
          name: "Hot Pasting Gum",
          description:
            "It is based on the best quality of starch for adhesive manufacturing. This solution gives excellent stiffness & strength to the corrugated board. Thus, it is an ideal gum pasting powder for multi-ply corrugated sheets. It can be used for pasting a wide variety of paper-converted products like paper bags, multi-wall paper sacks, paper tubes, paper boxes, and books.",
          imageSrc: Hot.src,
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
              <h3 className={`text-3xl lg27:text-4xl font-bold mb-6 ${styles.headingcolor}`}>
                {product.category}
              </h3>
              {product.category === "Cold Pesting Gum" ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.subProducts.map((subProduct, subIndex) => (
                    <li
                      key={subIndex}
                      className={`p-4 rounded-md shadow-md ${styles.boxcolor}`}
                    >
                      <Image
                        src={subProduct.imageSrc}
                        alt={subProduct.name}
                        className="w-full h-80 object-cover rounded-lg"
                        width={320}
                        height={320}
                      />
                      <h4 className={`mt-4 text-xl font-bold ${styles.headingcolor} lg27:text-2xl`}>
                        {subProduct.name}
                      </h4>
                      <p className={`mt-2 font-semibold lg27:text-lg ${styles.textcolor}`}>
                        {subProduct.description}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="relative w-full flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                  {/* Text on the left */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    {product.subProducts.map((subProduct, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h4 className={`text-xl font-bold ${styles.headingcolor}`}>
                          {subProduct.name}
                        </h4>
                        <p className={`mt-2 font-semibold ${styles.textcolor} lg27:text-lg`}>
                          {subProduct.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Image on the right */}
                  <div className="lg:w-1/2 flex justify-center">
                    <Image
                      src={product.subProducts[0].imageSrc}
                      alt={product.subProducts[0].name}
                      className="max-w-full h-auto object-contain rounded-lg shadow-md"
                      width={320}
                      height={480}
                    />
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomProductRange;

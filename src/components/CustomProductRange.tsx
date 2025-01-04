import React from "react";

const CustomProductRange = ({ styles }) => {
  const products = [
    {
      category: "Cold Pesting Gum",
      subProducts: [
        {
          name: "Pesting Gum Super",
          description: "Pure starch-based with extra resins and dryers.",
          imageSrc: "/pesting-gum-super.jpeg", // Replace with actual image path
        },
        {
          name: "Pesting Gum Regular",
          description: "Standard quality for versatile use.",
          imageSrc: "/pesting-gum-regular.jpeg", // Replace with actual image path
        },
        {
          name: "Pesting Gum Economy",
          description: "Cost-effective option for basic needs.",
          imageSrc: "/pesting-gum-economy.jpeg", // Replace with actual image path
        },
        {
          name: "Pesting Gum Special",
          description: "Premium adhesive for high-performance needs.",
          imageSrc: "/pesting-gum-special.jpeg", // Replace with actual image path
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
          imageSrc: "/hot-pasting-gum.jpeg", // Replace with actual image path
        },
      ],
    },
  ];

  return (
    <div className={`mt-10 w-full p-5 rounded-lg shadow-md ${styles.boxcolor}`}>
      <h2 className={`text-3xl font-extrabold mb-6 ${styles.headingcolor}`}>Product Range</h2>
      <ul className="space-y-8">
        {products.map((product, index) => (
          <li key={index}>
            <div className={`p-4 rounded-md shadow-sm ${styles.backgroundcolor}`}>
              <h3 className={`text-2xl font-bold mb-6 ${styles.headingcolor}`}>{product.category}</h3>
              {product.category === "Hot Pesting Gum" ? (
                <div className="relative w-full flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                  {/* Text on the left */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    {product.subProducts.map((subProduct, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h4 className={`text-xl font-bold ${styles.headingcolor}`}>
                          {subProduct.name}
                        </h4>
                        <p className={`mt-2 font-semibold ${styles.textcolor}`}>
                          {subProduct.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Image fixed to the right */}
                  <div className="absolute right-0 top-0 lg:relative lg:w-1/2 flex justify-end">
                    <img
                      src={product.subProducts[0].imageSrc}
                      alt={product.subProducts[0].name}
                      className="w-60 h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.subProducts.map((subProduct, subIndex) => (
                    <li key={subIndex} className={`p-4 rounded-md shadow-md ${styles.boxcolor}`}>
                      <img
                        src={subProduct.imageSrc}
                        alt={subProduct.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h4 className={`mt-4 text-xl font-bold ${styles.headingcolor}`}>
                        {subProduct.name}
                      </h4>
                      <p className={`mt-2 font-semibold ${styles.textcolor}`}>
                        {subProduct.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomProductRange;

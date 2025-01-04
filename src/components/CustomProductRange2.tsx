import React from "react";

const CustomProductRange2 = ({ styles }) => {
  const products = [
    {
      category: "Corrugation Adhesives",
      subProducts: [
        {
          name: "Corrugation Ready Mix",
          description: `
          - Appearance: Off white powder
          - Moisture: 14% max.
          - Viscosity: 28 ± 10 Seconds (Depending upon the requirement)
          - Gelatinization Temperature: 63 ± 2°C
          - Penetration: Normal
          - Paste Clarity: Opaque
          - Coverage: Good
          - Bonding: Superb
          - Setting: Fastest
          - Delamination: No
          - Fermentation: No
          - Toxicity: No
          - Shelf Life: Six Months
          Features:
          - Ready to use within a few minutes, providing instant usability.
          - Low viscosity provides high mileage, reduces consumption, and improves pin adhesion.
          - Consistent quality with a long storage life.
          - Dries in the required time, enabling faster machine speeds and higher production.
          - High solids content ensures perfect and superior bonding with no risk of delamination.
          - Facilitates in-house glue making when required, offering flexibility and reliability.
          `,
          imageSrc: "/corrugation-readymix.jpeg", // Replace with actual image path
        },
        {
          name: "Corrugation Two Step",
          description: `
          - Appearance: Off white powder
          - Moisture: 14% max.
          - Viscosity: 28 ± 10 Seconds (Depending upon the requirement)
          - Gelatinization Temperature: 63 ± 2°C
          - Penetration: Normal
          - Paste Clarity: Opaque
          - Coverage: Good
          - Bonding: Superb
          - Setting: Fastest
          - Delamination: No
          - Fermentation: No
          - Toxicity: No
          - Shelf Life: Six Months
          Features:
          - Ready to use within minutes, minimizing downtime and enhancing productivity.
          - Provides high mileage and low consumption, reducing overall operational costs.
          - Superior bonding with no chance of delamination, ensuring long-lasting performance.
          - High solids content guarantees perfect bonding and strong adhesion.
          - No dependency on external sources, allowing in-house glue making whenever needed.
          - User-adjustable ratio for optimal viscosity, ensuring precise application as per requirement.
          - While it offers excellent performance, it may settle in the container over time when unused.
          `,
          imageSrc: "/corrugation-two-step.jpeg", // Replace with actual image path
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
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {product.subProducts.map((subProduct, subIndex) => (
                  <li
                    key={subIndex}
                    className={`p-4 rounded-md shadow-md ${styles.boxcolor}`}
                  >
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomProductRange2;

import React from "react";

const ProductRange = ({ products, styles }) => {
  return (
    <div className={`mt-10 w-full p-5 rounded-lg shadow-md ${styles.boxcolor}`}>
      <h2 className={`text-2xl font-bold mb-4 ${styles.headingcolor}`}>Product Range</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className={`p-4 rounded-md shadow-sm ${styles.backgroundcolor}`}>
            <h3 className={`text-xl font-semibold ${styles.headingcolor}`}>{product.name}</h3>
            <p className={`mt-2 ${styles.textcolor}`}>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRange;

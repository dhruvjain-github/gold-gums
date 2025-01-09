import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import ProductRange from "@/components/ProductRange";

// Define styles interface
interface Styles {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

// Define product interface
interface Product {
  name: string;
  description: string;
}

const PaperConeAdhesivesPage: React.FC = () => {
  const styles: Styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
    "Paper Cone Adhesives are specially developed for manufacturing durable and robust paper cones. These adhesives ensure high strength, quick drying, and compatibility with various production processes.";

  const productInfo =
    "Our Paper Cone Adhesives are designed to meet the rigorous demands of the paper cone manufacturing industry. They provide excellent adhesion, durability, and are environmentally friendly, making them ideal for a wide range of applications.";

  const advantages = [
    "Low application due to fine texture.",
    "Fast drying for improved productivity.",
    "Consistent viscosity for given water mix ratio.",
    "Supports high-speed cone production machines.",
    "Hybrid resin mix products available for enhanced compression values.",
    "Compatible with low COBB and high Ply Bond papers.",
  ];

  const products: Product[] = [
    {
      name: "CONE PASTE COLD : Cold Water Soluble Maize Starch Based Alkaline Adhesive",
      description:
        "This adhesive is ideal for paper cones, offering excellent bonding and fast drying properties. It's formulated for high-speed production and is compatible with various machine types.",
    },
    {
      name: "CONE PASTE HOT : Hot Water Soluble Adhesive",
      description:
        "This product provides high viscosity, excellent adhesion, and works well with natural drying methods, ensuring superior bonding in cone manufacturing.",
    },
  ];

  return (
    <div className={`p-3 md:px-10 md:py-20 ${styles.backgroundcolor} lg27:px-64`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-auto">
          <ProductSideNavbar {...styles} />
        </div>

        <div className="flex-1">
          <div className="mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold ${styles.headingcolor}`}>
              Paper Cone Adhesives
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Discover high-performance adhesive solutions tailored for paper cone manufacturing.
            </p>
          </div>
          <DetailBox
            styles={styles}
            description={description}
            productInfo={productInfo}
            advantages={advantages}
            imageSrc="/PaperCone.jpeg"
          />
          <ProductRange products={products} styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default PaperConeAdhesivesPage;

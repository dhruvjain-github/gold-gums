import React from "react";
import ProductInfo from "./ProductInfo";
import MaltodextrinDetail from "../../public/MaltodextrinDetail.jpg"
import DextrousDetail from "../../public/DextrousDetail.webp"
import PlasticBoriDetail from "../../public/PlasticBoriDetail.jpg"

interface ProductDetailesProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductDetailes2: React.FC<ProductDetailesProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor,
}) => {
  const productInfo1Data = {
    title: "Malto Dextrin",
    description:
      "Our Maltodextrin is a hydrolysis product derived from starch, widely used as a thickener, filler, and stabilizer in food products. It offers excellent solubility and enhances the texture of processed foods.",
    advantages: [
      "Highly soluble with moderate viscosity.",
      "Acts as a stabilizer and bulking agent.",
      "Improves mouthfeel and texture in processed foods.",
    ],
    applications: [
      "Energy ingredient in nutritional supplements.",
      "Thickening agent in sauces and soups.",
      "Preservative to extend shelf life of frozen items.",
    ],
    imgLink: MaltodextrinDetail.src,
  };
  

  const productInfo2Data = {
    title: "Dextrose Anhydrous",
    description:
      "Our Dextrose Anhydrous is a highly purified crystalline powder that acts as a filler and energy source in pharmaceutical and food processing industries. It is free from moisture and offers excellent solubility.",
    advantages: [
      "Provides instant energy as a carbohydrate source.",
      "Highly soluble with a sweet taste.",
      "Low moisture content, ensuring long shelf life.",
    ],
    applications: [
      "Oral rehydration solutions and nutritional supplements.",
      "Sweetening agent in food and beverages.",
      "Filler in tablets and pharmaceutical formulations.",
    ],
    imgLink: DextrousDetail.src,
  };
  

  const productInfo3Data = {
    title: "Plastic Sacks",
    description:
      "Our Plastic Sacks is specifically designed to provide strong bonding for manufacturing plastic sacks and woven bags. It ensures durability and reliability in industrial applications.",
    advantages: [
      "Strong adhesion for plastic surfaces.",
      "Quick setting time for high productivity.",
      "Durable bonding to withstand heavy-duty usage.",
    ],
    applications: [
      "Manufacturing plastic sacks and woven bags.",
      "Bonding for industrial packaging materials.",
      "Lamination for heavy-duty applications.",
    ],
    imgLink: PlasticBoriDetail.src,
  };
  

  return (
    <div className={`${backgroundcolor}`}>
      {/* Product 1 */}
      <ProductInfo
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
        advantages={productInfo1Data.advantages}
        applications={productInfo1Data.applications}
      />

      {/* Product 2 */}
      <ProductInfo
        title={productInfo2Data.title}
        description={productInfo2Data.description}
        imgLink={productInfo2Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
        advantages={productInfo2Data.advantages}
        applications={productInfo2Data.applications}
      />

      {/* Product 3 */}
      <ProductInfo
        title={productInfo3Data.title}
        description={productInfo3Data.description}
        imgLink={productInfo3Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
        advantages={productInfo3Data.advantages}
        applications={productInfo3Data.applications}
      />
    </div>
  );
};

export default ProductDetailes2;

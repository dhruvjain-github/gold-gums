import React from "react";
import ProductInfo from "./ProductInfo";
import Cornflourdetail from "../../public/CornFlourDetail.jpg"
import Custurddetail from "../../public/CusturdDetail.jpg"
import Liquidglocusedetail from "../../public/LiquidGlucoseDetail.avif"

interface ProductDetailesProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductDetailes1: React.FC<ProductDetailesProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
}) => {
  const productInfo1Data = {
    title: "Corn Flour/Corn Starch",
    description:
      "Our Corn Flour and Corn Starch are versatile food-grade ingredients used for thickening, binding, and stabilizing textures in various culinary applications. Ideal for packaged foods, bakery products, and industrial uses.",
    advantages: [
      "Maintains texture and stability in food products.",
      "Neutral odor and taste suitable for various recipes.",
      "Free from rancidity, adulterants, and pest infestation.",
    ],
    applications: [
      "Thickening sauces, gravies, and soups.",
      "Baking and frying applications.",
      "Used in industrial-grade food stabilizers.",
    ],
    imgLink: Cornflourdetail.src,
  };
  

  const productInfo2Data = {
    title: "Custard Powder",
    description:
      "Our Custard Powder is a premium-quality product that provides a quick and easy way to prepare creamy and flavorful custard desserts. It also serves as a key ingredient in bakery and confectionery applications.",
    advantages: [
      "Adds texture and flavor to desserts.",
      "Easy to prepare, offering consistent results.",
      " Free from harmful chemicals and additives.",
    ],
    applications: [
      "Making custard desserts and puddings.",
      "Thickening soups, gravies, and sauces.",
      "Used as a gelling agent in bakery mixes.",
    ],
    imgLink: Custurddetail.src,
  };
  

  const productInfo3Data = {
    title: "Liquid Glucose/Glucose Powder",
    description:
      "Our Liquid Glucose and Glucose Powder are essential sweetening agents widely used in confectionery, bakery, and beverage industries for their superior sweetness and moisture-retaining properties.",
    advantages: [
      "Improves texture and gloss in candies.",
      "Prevents crystallization in confectionery.",
      "Enhances flavor and shelf life of baked goods.",
    ],
    applications: [
      "Hard candies, jams, and jellies.",
      "Frozen desserts and ice creams.",
      "Cold beverages and syrups.",
    ],
    imgLink: Liquidglocusedetail.src,
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

export default ProductDetailes1;

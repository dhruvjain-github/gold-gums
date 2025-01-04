"use client";

import React from "react";
import FoodProducttop from "@/components/FoodProducttop";
import Menu from "@/components/Menu";
import Productoverview2 from "@/components/Productoverview2";
import ProductDetailes1 from "@/components/ProductDetailes1";
import ProductDetailes2 from "@/components/ProductDetailes2";
import CornFlouroverview from "../../../public/CornFlouroverview.jpg"
import Custurdoverview from "../../../public/CusturdOverview.jpg"
import Liquidglucoseoverview from "../../../public/LiquidGlocuseoverview.jpg"
import Maltodextrinoverview from "../../../public/Maltodextrinoverview.webp"
import Dextrousoverview from "../../../public/Dextrousoverview.webp"
import PlasticBorioverview from "../../../public/Plastic-Borioverview.webp"

export default function FoodProductPage() {
  const backgroundcolor = "bg-orange-100";
  const headingcolor = "text-orange-950";
  const textcolor = "text-gray-800";
  const iconcolor = "text-red-800";
  const boxcolor = "bg-orange-200";

  const productOverviewData = {
    header: "Explore our Food-grade products ",
    description:
      "At Divykulp, Explore premium-quality corn flour, corn starch, custard powder, liquid glucose, and glucose powder. Perfect for enhancing texture, sweetness, and flavor in culinary and confectionery applications.",
    header2:"Explore more products",
    description2:"We offer a wide range of products including adhesives and food-grade products we also offer a wide range of products which includes Malto Dextrin, Dextrose Anhydrous, Plastic Sacks andSeasonal products like rangoli and many more",
    products: [
      [
        {
          title: "Corn Flour/Corn Starch",
          description:
            "Corn Flour and Corn Starch are versatile ingredients used for thickening sauces, gravies, and soups, as well as in baking and frying applications.",
          imgLink: CornFlouroverview.src,
        },
        {
          title: "Custard Powder",
          description: "Custard Powder is a quick and easy way to prepare creamy and delicious custard desserts.",
          imgLink: Custurdoverview.src,
        },
        {
          title: "Liquid Glucose/Glucose Powder",
          description: "Liquid Glucose and Glucose Powder are widely used in confectionery, bakery, and pharmaceuticals for their sweetness and moisture-retaining properties.",
          imgLink: Liquidglucoseoverview.src,
        },
      ],
      [
        {
          title: "Malto Dextrin",
          description:
            "Malto Dextrin is a starch-based additive used as a thickener, filler, and stabilizer in food products like snacks, sauces, and beverages.",
          imgLink: Maltodextrinoverview.src,
        },
        {
          title: "Dextrose Anhydrous",
          description: "Dextrose Anhydrous is a high-purity sugar used in energy drinks, baked goods, and medical applications.",
          imgLink: Dextrousoverview.src,
        },
        {
          title: "Plastic Sacks/PP Woven Bags",
          description: "Plastic Sacks Adhesive is designed for strong bonding in the manufacturing of plastic sacks and woven bags.",
          imgLink: PlasticBorioverview.src,
        },
      ],
    ]
  };

  return (
    <div>
      {/* Top Section */}
      <FoodProducttop
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      {/* Product Overview */}
      <Productoverview2
        header={productOverviewData.header}
        description={productOverviewData.description}
        products={productOverviewData.products[0]}
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      {/* Product Details */}
      <ProductDetailes1
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />

<Productoverview2
        header={productOverviewData.header2}
        description={productOverviewData.description2}
        products={productOverviewData.products[1]}
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      <ProductDetailes2
      backgroundcolor={backgroundcolor}
      headingcolor={headingcolor}
      textcolor={textcolor}
      iconcolor={iconcolor}
      boxcolor={boxcolor} />

      {/* Menu */}
      <Menu
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />
    </div>
  );
}

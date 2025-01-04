"use client";

import React from "react";
import FoodProducttop from "@/components/FoodProducttop";
import Menu from "@/components/Menu";
import Productoverview2 from "@/components/Productoverview2";
import ProductDetailes1 from "@/components/ProductDetailes1";

export default function FoodProductPage() {
  const backgroundcolor = "bg-orange-100";
  const headingcolor = "text-orange-950";
  const textcolor = "text-gray-800";
  const iconcolor = "text-red-800";
  const boxcolor = "bg-orange-200";

  const productOverviewData = {
    header: "Explore Our Food-Grade Product Range",
    description:
      "At Divykulp, Explore premium-quality corn flour, corn starch, custard powder, liquid glucose, and glucose powder. Perfect for enhancing texture, sweetness, and flavor in culinary and confectionery applications.",
    products: [
      {
        title: "Yellow/White Dextrin",
        description:
          "Our adhesives guarantee strong and durable bonds for corrugated packaging.",
        imgLink: "/images/product1.jpg",
      },
      {
        title: "Adhesives for Paper Tubes",
        description: "Designed for efficiency, our adhesives enhance paper tube production.",
        imgLink: "/images/product2.jpg",
      },
      {
        title: "Adhesives for Paper Cones",
        description: "Our adhesives provide reliable bonding for paper cones.",
        imgLink: "/images/product3.jpg",
      },
    ],
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
        products={productOverviewData.products}
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

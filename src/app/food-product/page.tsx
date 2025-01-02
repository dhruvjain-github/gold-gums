import Productoverview from "@/components/Productoverview";

import ProductDetailes3 from "@/components/ProductDetailes3";
import ProductDetailes4 from "@/components/ProductDetailes4";
import FoodProducttop from "@/components/FoodProducttop";
import Menu from "@/components/Menu";

export default function FoodProductPage() {
    const backgroundcolor = "bg-orange-100";
    const headingcolor = "text-orange-950";
    const textcolor = "text-gray-800";
    const iconcolor = "text-red-800";
    const boxcolor = "bg-orange-200";
  
    const productOverviewData = [
      {
        header: "Explore Our Food-Grade Product Range",
        description:
          "At Divykulp,Explore premium-quality corn flour, corn starch, custard powder, liquid glucose, and glucose powder. Perfect for enhancing texture, sweetness, and flavor in culinary and confectionery applications.",
        products: [
          {
            title: "Adhesives for Corrugated Boxes",
            description:
              "Our adhesives guarantee strong and durable bonds for corrugated packaging.",
          },
          {
            title: "Adhesives for Paper Tubes",
            description: "Designed for efficiency, our adhesives enhance paper tube production.",
          },
          {
            title: "Adhesives for Paper Cones",
            description: "Our adhesives provide reliable bonding for paper cones.",
          },
        ],
      },
      {
        header: "Explore Our Specialty Starch-Based Products",
        description:
          "At Gold Gums, we offer a diverse range of specialty starch-based products tailored to meet your industrial needs. Our commitment to quality ensures that each product delivers exceptional performance.",
        products: [
          {
            title: "Dextrines: Versatile and Reliable Solutions",
            description:
              "Our dextrines are perfect for various applications, providing excellent adhesion and stability.",
          },
          {
            title: "Modified Starches: Enhanced Performance for Industries",
            description:
              "Our modified starches are designed to improve product functionality and efficiency.",
          },
          {
            title: "Thin Boiling Starches: Ideal for Food Applications",
            description:
              "These starches provide excellent thickening and gelling properties for food products.",
          },
        ],
      },
    ];
  
    return (
      <div>
        <FoodProducttop
          backgroundcolor={backgroundcolor}
          headingcolor={headingcolor}
          textcolor={textcolor}
          boxcolor={boxcolor}
        />
        <Productoverview
          header={productOverviewData[0].header}
          description={productOverviewData[0].description}
          products={productOverviewData[0].products}
          backgroundcolor={backgroundcolor}
          headingcolor={headingcolor}
          textcolor={textcolor}
          boxcolor={boxcolor}
        />
        <ProductDetailes3
          backgroundcolor={backgroundcolor}
          headingcolor={headingcolor}
          textcolor={textcolor}
          iconcolor={iconcolor}
          boxcolor={boxcolor}
        />
        <Productoverview
          header={productOverviewData[1].header}
          description={productOverviewData[1].description}
          products={productOverviewData[1].products}
          backgroundcolor={backgroundcolor}
          headingcolor={headingcolor}
          textcolor={textcolor}
          boxcolor={boxcolor}
        />
        <ProductDetailes4
          backgroundcolor={backgroundcolor}
          headingcolor={headingcolor}
          textcolor={textcolor}
          iconcolor={iconcolor}
          boxcolor={boxcolor}
        />
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
import Productoverview from "@/components/Productoverview";
import ProductDetailes1 from "@/components/ProductDetailes1";
import ProductDetailes2 from "@/components/ProductDetailes2";
import Producttop from "@/components/Producttop";
import Menu from "@/components/Menu";

export default function AdhesiveProductPage() {
  const productOverviewData = [
    {
      header: "Explore Our Comprehensive Product Range",
      description:
        "At Gold Gums, we specialize in providing high-performance adhesives tailored for various applications. Our extensive product line ensures that your business can find the perfect solution for every bonding need. Experience reliability and excellence with our trusted adhesive products.",
      products: [
        {
          title: "Adhesives for Corrugated Boxes",
          description: "Our adhesives guarantee strong and durable bonds for corrugated packaging.",
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
          description: "Our dextrines are perfect for various applications, providing excellent adhesion and stability.",
        },
        {
          title: "Modified Starches: Enhanced Performance for Industries",
          description: "Our modified starches are designed to improve product functionality and efficiency.",
        },
        {
          title: "Thin Boiling Starches: Ideal for Food Applications",
          description: "These starches provide excellent thickening and gelling properties for food products.",
        },
      ],
    },
  ];

  return (
    <div>
      <Producttop />
      <Productoverview
        header={productOverviewData[0].header}
        description={productOverviewData[0].description}
        products={productOverviewData[0].products}
      />
      <ProductDetailes1 />
      <Productoverview
        header={productOverviewData[1].header}
        description={productOverviewData[1].description}
        products={productOverviewData[1].products}
      />
      <ProductDetailes2 />
      <Menu />

    </div>
  );
}

import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table1 from "../../../components/Table1";
import ProductRange from "@/components/ProductRange";

const PaperConeAdhesivesPage = () => {
  const styles = {
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

  const imageSrc = "path/to/paper-cone-adhesive-image.jpg"; // Replace with your actual image path

  // Table Headers and Data
  const tableHeaders = ["Property", "Value"];
  const tableData = [
    { Property: "Bonding Strength", Value: "High" },
    { Property: "Drying Time", Value: "Quick" },
    { Property: "Eco-Friendliness", Value: "Environmentally Safe" },
    { Property: "Compatibility", Value: "Paper Cone Machines" },
  ];

  // Product Range Data
  const products = [
    {
      name: "Cold Water Soluble Maize Starch Based Alkaline Adhesive",
      description:
        "This adhesive is ideal for paper cones, offering excellent bonding and fast drying properties. It's formulated for high-speed production and is compatible with various machine types.",
    },
    {
      name: "Hot Water Soluble Maize Starch Based Adhesive",
      description:
        "This product provides high viscosity, excellent adhesion, and works well with natural drying methods, ensuring superior bonding in cone manufacturing.",
    },
    {
      name: "Hybrid Resin Mix Adhesive",
      description:
        "For enhanced compression values, this adhesive blends maize starch and resin, ensuring strong bonding even at higher production speeds.",
    },
  ];

  return (
    <div className={`p-3 md:px-10 md:py-20 ${styles.backgroundcolor}`}>
      {/* Flex Container for Sidebar and Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Sidebar */}
        <div className="md:w-auto">
          <ProductSideNavbar {...styles} />
        </div>

        {/* Main Content */}
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
            imageSrc={imageSrc}
          />
          <ProductRange products={products} styles={styles} />
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 mt-10 md:mt-0">
        <Table1 headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
};

export default PaperConeAdhesivesPage;

import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table1 from "../../../components/Table1";

const SemiAutoAdhesivesPage = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
    "Semi-Automatic Corrugation Adhesives are designed specifically for use in semi-automatic plants. These adhesives provide excellent bonding properties while maintaining the flexibility required for a semi-automated process. Proper adhesion is key to achieving high-quality corrugated boards, even in less automated environments.";

  const productInfo =
    "The viscosity of Semi-Automatic Corrugation Adhesive is optimized to ensure smooth application during production. The adhesive is compatible with manual and semi-automatic setups, offering consistent performance across varied conditions. Designed to enhance bonding strength while reducing wastage, it ensures high yield and reliability.";

  const advantages = [
    "Optimized viscosity for semi-automatic applications.",
    "High bonding strength, even in less automated setups.",
    "Consistent performance under varied production conditions.",
    "Compatible with waterproof formulations.",
    "Enhanced productivity and reduced wastage.",
    "Eco-friendly and safe to use.",
  ];

  const imageSrc = "path/to/semi-auto-image.jpg"; // Replace with your actual image path

  // Table Headers and Data
  const tableHeaders = ["Property", "Value"];
  const tableData = [
    { Property: "Viscosity", Value: "Optimized for Semi-Auto Plants" },
    { Property: "Bonding Strength", Value: "High" },
    { Property: "Performance Consistency", Value: "Reliable Across Conditions" },
    { Property: "Compatibility", Value: "Waterproof Formulations" },
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
              Semi-Automatic Plant Adhesives
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Explore adhesive solutions tailored for semi-automatic corrugated plants.
            </p>
          </div>
          <DetailBox
            styles={styles}
            description={description}
            productInfo={productInfo}
            advantages={advantages}
            imageSrc={imageSrc}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 mt-10 md:mt-0">
        <Table1 headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
};

export default SemiAutoAdhesivesPage;

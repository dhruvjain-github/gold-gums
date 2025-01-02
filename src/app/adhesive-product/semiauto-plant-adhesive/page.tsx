import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table1 from "../../../components/Table1";
import ProductRange from "@/components/ProductRange";

const SemiAutoAdhesivesPage = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
    "Manual and semi-automatic corrugated board plants often face challenges like lack of drying provisions, sub-optimal mixing, and higher moisture levels. Our adhesive solutions are specifically formulated to perform effectively under these conditions, ensuring superior bonding and faster drying times.";

  const productInfo =
    "Gold Gums Pvt. Ltd. provides high-performance adhesive powders tailored to meet the unique requirements of manual and semi-automatic plants. These adhesives are designed to handle challenges such as higher paper moisture, increased COBB values, and insufficient heating, ensuring reliable bonding and optimal board quality.";

  const advantages = [
    "Provides excellent bonding even under high moisture conditions.",
    "Dries boards in less than 30 minutes under optimal conditions.",
    "Maintains consistent viscosity and initial tack for smooth operations.",
    "Compatible with higher COBB values and moisture levels.",
    "Low energy consumption, enhancing efficiency.",
    "Prevents glue separation, ensuring consistent performance.",
  ];

  const tableHeaders = ["Product", "Features"];
  const tableData = [
    {
      Product: "Corrugation Powder",
      Features:
        "Provides excellent bonding, fast setting, consistent viscosity, and 100% fiber tear. Allows faster processing and efficient energy use.",
    },
    {
      Product: "Pasting Powder",
      Features:
        "Offers consistent viscosity, fast setting, and reduced drying time. Ensures reliable operations with minimal wastage.",
    },
  ];

  const products = [
    {
      name: "Traditional Hot Water Soluble Yellow Dextrin Based Adhesive Powders",
      description:
        "Borated fine Yellow Dextrin based products that provide excellent flow at high viscosity. Suitable for any paper.",
    },
    {
      name: "Cold Water Soluble Dextrin based High pH Adhesive Powders",
      description:
        "High tack glues for bad papers offering excellent drying characteristics and better compression strength.",
    },
    {
      name: "Hybrid Adhesive Powders",
      description:
        "A blend of Dextrins and PVA, ideal for high-speed machines above 40 mtr/min.",
    },
    {
      name: "Very High Solid Filler Based Adhesive Powders",
      description:
        "Instantly drying adhesives that save factory space and reduce lead time.",
    },
    {
      name: "Water Resistant Resin & Dextrin Based Adhesive Powders",
      description:
        "Resistant to moisture and designed for sub-zero temperature applications, increasing compression strength.",
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
              Manual / Semi-Automatic Corrugated Board Adhesives
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Explore advanced adhesive solutions for manual and semi-automatic
              corrugated board plants, designed to overcome production
              challenges and deliver exceptional results.
            </p>
          </div>
          <div className="flex-1">
            <DetailBox
              styles={styles}
              description={description}
              productInfo={productInfo}
              advantages={advantages}
            />
            <ProductRange products={products} styles={styles} />
          </div>
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

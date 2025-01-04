import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table3 from "@/components/Table3";
import CustomProductRange from "@/components/CustomProductRange";
import CustomProductRange2 from "@/components/CustomProductRange2";

const SemiAutoAdhesivesPage = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const pestingGumDescription =
    "Manual and semi-automatic corrugated board plants often face challenges like lack of drying provisions, sub-optimal mixing, and higher moisture levels. Our adhesive solutions are specifically formulated to perform effectively under these conditions, ensuring superior bonding and faster drying times.";

  const corrugationGumDescription =
    "Our Corrugation Gum range is designed to handle the unique challenges faced by semi-automatic and manual corrugated board plants. These adhesives offer excellent bonding even in high moisture conditions, ensuring smooth operations and superior board quality.";

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

  const pestingGumProducts = [
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

  const corrugationGumProducts = [
    {
      name: "Redimix",
      description:
        "A ready-to-use adhesive powder offering excellent bonding and moisture resistance.",
    },
    {
      name: "Two Step",
      description:
        "A two-step process adhesive designed for high-speed applications, offering superior strength and quick setting times.",
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
            <h1
              className={`text-3xl md:text-4xl font-bold ${styles.headingcolor}`}
            >
              Manual / Semi-Automatic Corrugated Board Adhesives
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Explore advanced adhesive solutions for manual and semi-automatic
              corrugated board plants, designed to overcome production
              challenges and deliver exceptional results.
            </p>

            <span className="flex w-full ">
              <h2 className="mt-8 text-5xl text-orange-200 font-bold bg-orange-900 inline-block px-4 py-2 rounded shadow mx-auto mb-2">
                PESTING GUM
              </h2>
            </span>
          </div>
          <div className="flex-1">
            <DetailBox
              styles={styles}
              description={pestingGumDescription}
              productInfo={productInfo}
              advantages={advantages}
              imageSrc="/Pesting.jpeg"
            />
            <CustomProductRange styles={styles} products={pestingGumProducts} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      {/* <div className="flex-1 mt-10 md:mt-10">
        <Table3
          styles={{
            tableClassName: "min-w-full border border-gray-400 bg-orange-200",
            headerClassName: "bg-orange-300 text-orange-950",
            rowClassName: "bg-white even:bg-orange-100",
            cellClassName: "border border-orange-400 px-4 py-2",
          }}
        />
      </div> */}

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
  {/* Empty div with bg-orange-200 */}
  <div className="md:w-64 bg-orange-100 rounded-md md:mt-10"></div>

  {/* Main Content */}
  <div className="flex-1">
    <div className="mb-8">

      <span className="flex w-full">
        <h2 className="mt-10 text-5xl text-orange-200 font-bold bg-orange-900 inline-block px-4 py-2 rounded shadow mx-auto mb-2">
          CORRUGATION GUM
        </h2>
      </span>
    </div>
    <div className="flex-1">
      <DetailBox
        styles={styles}
        description={pestingGumDescription}
        productInfo={productInfo}
        advantages={advantages}
        imageSrc="/Pesting.jpeg"
      />
      <CustomProductRange2 styles={styles}  />
    </div>
  </div>
</div>

    </div>
  );
};

export default SemiAutoAdhesivesPage;

import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";


const PaperTubeAdhesivesPage = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
    "Paper Tube Adhesives are formulated to provide excellent bonding for manufacturing high-strength paper tubes and cores. These adhesives ensure durability, quick curing, and efficiency in production processes.";

  const productInfo =
    "Our Paper Tube Adhesives are ideal for producing durable paper tubes and cores used in industries like packaging, textiles, and construction. They are eco-friendly, offer high adhesion, and ensure long-lasting performance.";

  const advantages = [
    "Superior bonding for high-strength paper tubes.",
    "Quick curing to enhance production efficiency.",
    "Eco-friendly and non-toxic formulations.",
    "Compatible with various paper tube manufacturing machines.",
    "Reliable performance in demanding applications.",
  ];

  // const imageSrc = "path/to/paper-tube-adhesive-image.jpg"; // Replace with the actual image path

  // Table Headers and Data
  // const tableHeaders = ["Property", "Value"];
  // const tableData = [
  //   { Property: "Bonding Strength", Value: "High" },
  //   { Property: "Curing Time", Value: "Quick" },
  //   { Property: "Eco-Friendliness", Value: "Non-Toxic, Safe" },
  //   { Property: "Compatibility", Value: "Paper Tube Machines" },
  // ];

  // Product range data based on your provided content
  // const productRangeData = [
  //   {
  //     name: "Traditional Hot Water Soluble Yellow Dextrin-Based Adhesive Powders",
  //     description:
  //       "Borated fine Yellow Dextrin-based products that offer excellent flow at high viscosity. Can be used for any paper type.",
  //   },
  //   {
  //     name: "Cold Water Soluble Dextrin-Based High pH Adhesive Powders",
  //     description:
  //       "These adhesives are based on Dextrins and a high dosage of Caustic, offering high tack for suboptimal papers with excellent drying characters.",
  //   },
  //   {
  //     name: "Hybrid Adhesive Powders",
  //     description:
  //       "Blended Dextrins and PVA formulations, suited for high-speed machines (above 40 m/min) for tube production.",
  //   },
  //   {
  //     name: "Very High Solid (60-70%) Filler-Based Adhesive Powders",
  //     description:
  //       "Provides good weight to the core, dries instantly, and is ready for dispatch, saving factory space and reducing inventory.",
  //   },
  //   {
  //     name: "Water Resistant Resin & Dextrin-Based Adhesive Powders",
  //     description:
  //       "Special imported resins for water-resistant bonding. Helps in sub-zero temperature applications, maintaining the compression strength (CS).",
  //   },
  // ];

  return (
    <div className={`p-3 md:px-10 md:py-20 ${styles.backgroundcolor} lg27:px-64 `}>
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
              Paper Tube Adhesives
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Explore our premium adhesive solutions for the efficient and durable production of paper tubes and cores.
            </p>
          </div>
          <DetailBox
            styles={styles}
            description={description}
            productInfo={productInfo}
            advantages={advantages}
            imageSrc="/PaperTube-Cone.jpeg"
          />
          {/* Pass the productRangeData to ProductRange */}
          
        </div>
      </div>

      {/* Table Section */}
      {/* <div className="flex-1 mt-10 md:mt-0">
        <Table1 headers={tableHeaders} data={tableData} />
      </div> */}
    </div>
  );
};

export default PaperTubeAdhesivesPage;

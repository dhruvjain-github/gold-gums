import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table1 from "../../../components/Table1";

const AutoPlantAdhesivePage = () => {
  const description =
    "Auto Plant Corrugation Adhesive is completely different from Manual Plant Corrugation Powder. Using Manual Corrugation Adhesives in Auto Plants results in sub-optimal bonding. Auto plants operate efficiently with steam, and heat transfer to the board is highly effective. These plants can utilize formulations based on Native Starch, while Manual Plants require Modified Starch. Auto Plants can also handle higher viscosity glues due to the availability of circulation systems. The 2-ply sheet undergoes reheating in the Double Backer, and bonding must remain stable without becoming brittle under the belt.";

  const productInfo =
    "Consistency in viscosity is crucial for smooth running of Auto Plants. The viscosity of Corrugation Adhesive must be consistent in the mixing tank during preparation and stable in the tray during operation. Viscosity drop due to circulation is minimal (10-15%). Our Amylodex Corrugation Powder for Auto Plants is made from a blend of modified and unmodified Maize Starch, providing high consistency. One adhesive grade can be used for both Single Facer and Double Backer applications. Viscosity slightly drops in Single Facer, while it remains stable at Double Backer.";

  const advantages = [
    "High initial tack, ensuring the machine runs at designed speed, crucial for green bond formation.",
    "Carrier-based formulation offers consistent viscosity with predictable behavior in both tank and tray.",
    "Compatible with running speeds up to 250 Mtr/Min, and tested at 210 Mtr/Min.",
    "100% fiber tear across all layers.",
    "Quick setting time.",
    "Compatible with waterproof resins and offers moisture resistance.",
    "Helps in achieving theoretical Compression Values.",
    "Provides strong bonding even with high compact Kraft liners.",
    "Low energy-consuming adhesives."
  ];

  const additivesDescription =
    "Many high-end auto plants feature fully automated glue kitchens. Some Corrugators create their own glue using starch, caustic, and borax—basic ingredients for Corrugation Adhesives. Various additives and modified starches can enhance board properties. In auto glue kitchens, additives make up 15% of starch, while in non-automated kitchens, it’s 25%. This formulation offers similar performance to our premixed glues, providing cost savings by using native starch at the customer’s end.";

  const modifiedStarchAdvantages = [
    "High initial tack for smooth machine operation and green bond formation.",
    "Consistent viscosity with predictable behavior in the tank and tray.",
    "Compatible with running speeds up to 250 Mtr/Min.",
    "100% fiber tear on all layers.",
    "Quick setting, no curing required, allowing boards to be processed in under 5 minutes.",
    "Compatible with waterproof resins at any dosage.",
    "Offers moisture resistance.",
    "Achieves 8-10% higher compression values.",
    "Improves bonding in highly sized papers.",
    "Saves energy, reducing consumption by 10-25%."
  ];

  const imageSrc = "path/to/your/image.jpg"; // Replace with your actual image path

  // Table Headers and Data
  const tableHeaders = ["Property", "Value"];
  const tableData = [
    { Property: "Initial Tack", Value: "High" },
    { Property: "Viscosity Consistency", Value: "Stable in Mixing Tank" },
    { Property: "Max Speed", Value: "250 Mtr/Min" },
    { Property: "Compatibility", Value: "Waterproof Resins" },
  ];

  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

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
              Corrugated Adhesives for Automatic Plants
            </h1>
            <p className={`mt-4 ${styles.textcolor} max-w-2xl font-semibold`}>
              Explore premium adhesive solutions tailored for corrugated packaging.
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

      {/* Additives and Modified Starch Section */}
      <div className="mt-6 bg-orange-200 rounded-md p-4 shadow-md">
        <h2 className={`text-xl font-extrabold ${styles.headingcolor} mb-4`}>
          Additives & Modified Starch for Auto Plants
        </h2>
        <p className={`mt-2 ${styles.textcolor} text-lg leading-relaxed`}>
          {additivesDescription}
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-4">
          {/* Additives List Section */}
          <div className="flex-1 space-y-3">
            <h3 className={`text-lg font-bold ${styles.headingcolor} mb-2`}>Key Advantages</h3>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              {modifiedStarchAdvantages.map((advantage, index) => (
                <li key={index} className={`text-md ${styles.textcolor}`}>
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          {/* <div className="flex-shrink-0 w-full md:w-1/3 h-48 bg-orange-300 rounded-lg overflow-hidden shadow-md">
            <img
              src={imageSrc}
              alt="Modified Starch Additives"
              className="h-full w-full object-cover"
            />
          </div> */}
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 mt-6 md:mt-0">
        <Table1 headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
};

export default AutoPlantAdhesivePage;

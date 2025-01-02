import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
import Table1 from "../../../components/Table1";

const BookBindingAdhesivePage: React.FC = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
    "Auto Plant Corrugation Adhesive is completely different from Manual Plant Corrugation Powder. If Manual Corrugation Adhesives are used in Auto Plant, it would result in sub-optimal bonding. Most plants run on steam, and heat transfer to the board is very efficient. Auto Plants can use formulations based on Native Starch. However, Manual Plants need Modified Starch-based formulations. Auto plants can handle higher viscosity glues due to the availability of circulation systems. The 2-ply sheet is subject to reheating in the Double Backer, and bonding should not become brittle under the belt.";

  const productInfo =
    "Consistency in viscosity is very crucial for smooth running of Auto Plant. Corrugation Adhesive viscosity must be consistent at mixing tank during the preparation and stable in the tray while running. Viscosity drop due to circulation is marginal ( 10-15%). Amylodex Corrugation Powder for auto plants are made from blend of modified and unmodified Maize Starch. Customers can get highly consistent product. One grade of adhesive can be used for Single Facer and Double Backer application. Viscosity would slightly drop in Single Facer and viscosity at Double Backer would remain same.";

  const advantages = [
    "High initial tack. This will allow machine to run designed speed. This is important for formation of green bond.",
    "Amylodex Corrugation Adhesive is carrier based formulation and gives very consistent viscosity. Viscosity behaviour in tank and tray are very predictable.",
    "Existing formulations are compatible to run 250 Mtr/ Min and tested at customers place at 210 Mtr/Min.",
    "100 % fiber tear on all the layers.",
    "Quick setting.",
    "Compatible with waterproof resins.",
    "Compatible with waterproof resins."
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
              Book Binding Adhesives
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
      {/* Table Section */}
        <div className="flex-1 mt-10 md:mt-0">
          <Table1 headers={tableHeaders} data={tableData} />
        </div>
    </div>
  );
};

export default BookBindingAdhesivePage;

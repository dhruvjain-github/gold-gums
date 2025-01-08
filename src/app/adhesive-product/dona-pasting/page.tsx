import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";
// import Table1 from "../../../components/Table1";

const DonaAdhesivesPage = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  const description =
  "Our Paper Plate (Dona) Gum Powder is specially formulated for bonding materials such as Aluminium Foil, BOPP (Biaxially Oriented Polypropylene), and Polyester Film. We pride ourselves on being a trusted manufacturer, exporter, and supplier of high-quality lamination adhesives in India. Sourced from top-grade components and tested rigorously under strict industry standards, our adhesives are designed to provide exceptional bonding strength while ensuring reliable performance. This product is perfect for businesses requiring high-quality, cost-effective lamination solutions for paper plates, ensuring a strong, durable finish.";


  const productInfo =
  "Our Paper Plate (Dona) Gum Powder is an advanced lamination adhesive designed for seamless bonding of Aluminium Foil, BOPP, and Polyester Films. This product ensures high adhesive strength and exceptional performance, particularly suited for the lamination of paper plates. It is optimized for use in both manual and semi-automatic setups, providing a smooth application process with reduced wastage and consistent results across varied production conditions.";


  const advantages = [
    "Optimized for bonding Aluminium Foil, BOPP, and Polyester Films, ideal for paper plate lamination.",
    "Strong bonding strength, ensuring durable and long-lasting adhesion for paper plates.",
    "Smooth application process, reducing material wastage and enhancing production efficiency.",
    "Versatile performance across both manual and semi-automatic lamination setups.",
    "Compatible with waterproof formulations, ensuring consistent quality even in humid conditions.",
    "Eco-friendly, non-toxic, and safe for use in food packaging applications.",
    "Enhanced productivity due to reduced application time and improved bonding consistency.",
    "Affordable pricing without compromising on quality, making it an ideal solution for mass production."
  ];
  

  // const imageSrc = "path/to/semi-auto-image.jpg"; // Replace with your actual image path

  // Table Headers and Data
  // const tableHeaders = ["Property", "Value"];
  // const tableData = [
  //   { Property: "Viscosity", Value: "Optimized for Semi-Auto Plants" },
  //   { Property: "Bonding Strength", Value: "High" },
  //   { Property: "Performance Consistency", Value: "Reliable Across Conditions" },
  //   { Property: "Compatibility", Value: "Waterproof Formulations" },
  // ];

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
              Paper-Plate Adhesives / Dona Lamination
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
            imageSrc="/Paper-Plate.jpeg"
          />
        </div>
      </div>

      {/* Table Section */}
      {/* <div className="flex-1 mt-10 md:mt-0">
        <Table1 headers={tableHeaders} data={tableData} />
      </div> */}
    </div>
  );
};

export default DonaAdhesivesPage;

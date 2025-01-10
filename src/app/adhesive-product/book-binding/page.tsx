import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";


const BookBindingAdhesivePage: React.FC = () => {
  const styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  
  const description =
  "Book Binding Adhesives are specifically designed to meet the demands of modern bookbinding processes. These adhesives offer exceptional bonding strength, durability, and flexibility, ensuring that the books remain intact through extensive handling and usage. Whether for hardcover, softcover, or case binding applications, these adhesives cater to a wide range of binding needs.";

const productInfo =
  "Our Book Binding Adhesives are developed using advanced formulations to provide consistent performance across various bookbinding techniques. They ensure a strong initial tack and quick setting, making them ideal for high-speed binding machines. With excellent adhesion properties, these adhesives are compatible with different types of paper, covers, and binding equipment. Additionally, they maintain flexibility, ensuring the books can be opened flat without compromising the spine's strength. These adhesives are eco-friendly and compatible with waterproof resins for enhanced durability.";


  const advantages = [
    "Strong initial tack ensures efficient and reliable binding, even at high speeds.",
    "Formulated for consistent viscosity, providing predictable performance across various bookbinding machines.",
    "Quick setting properties reduce production time and enhance workflow efficiency.",
    "Excellent flexibility, ensuring books can open flat without compromising the spine’s integrity.",
    "Compatible with a wide range of paper and cover materials, including glossy and textured surfaces.",
    "Eco-friendly and free from harmful chemicals, making it safe for users and the environment.",
    "Water-resistant properties for enhanced durability and protection against moisture.",
  ];
  

  // const imageSrc = "https://content.jdmagicbox.com/quickquotes/images_main/fotd-50-ltr-374076396-3wtm5.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"; // Replace with your actual image path

  // Table Headers and Data
  // const tableHeaders = ["Property", "Value"];
  // const tableData = [
  //   { Property: "Initial Tack", Value: "High" },
  //   { Property: "Viscosity Consistency", Value: "Stable in Mixing Tank" },
  //   { Property: "Max Speed", Value: "250 Mtr/Min" },
  //   { Property: "Compatibility", Value: "Waterproof Resins" },
  // ];

  return (
    <div className={`p-3 md:px-10 md:py-20 ${styles.backgroundcolor} lg27:px-64`}>
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
            imageSrc="/Book-Binding.jpg"
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

export default BookBindingAdhesivePage;

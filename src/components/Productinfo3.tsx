import React from "react";
import Table1 from "./Table1"; // Importing the Table component

interface ProductInfo1Props {
  title: string;
  imgLink: string;
  headingcolor: string;
}

const Productinfo3: React.FC<ProductInfo1Props> = ({ title, imgLink, headingcolor }) => {
  // Static table headers and data for six columns
  const tableHeaders = [
    "Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6"
  ];

  const tableData = [
    { "Column 1": "Product A", "Column 2": "Data A2", "Column 3": "Data A3", "Column 4": "Data A4", "Column 5": "Data A5", "Column 6": "Data A6" },
    { "Column 1": "Product B", "Column 2": "Data B2", "Column 3": "Data B3", "Column 4": "Data B4", "Column 5": "Data B5", "Column 6": "Data B6" },
    { "Column 1": "Product C", "Column 2": "Data C2", "Column 3": "Data C3", "Column 4": "Data C4", "Column 5": "Data C5", "Column 6": "Data C6" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-20">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className={`text-3xl md:text-4xl font-bold leading-tight ${headingcolor}`}>
          {title}
        </h1>

        {/* Table Section */}
        <div className="mt-6">
          <Table1 headers={tableHeaders} data={tableData} />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-64 md:w-80 md:h-80 bg-gray-300 flex items-center justify-center rounded mt-8 md:mt-0">
        <img
          src={imgLink}
          alt="Product"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

export default Productinfo3;

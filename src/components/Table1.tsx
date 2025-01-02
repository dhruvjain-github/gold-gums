"use client"
import React from "react";

interface Table1Props {
  headers: string[]; // Accept headers as an array of strings
  data: { [key: string]: string | number }[]; // Accept rows as an array of objects
}

const Table1: React.FC<Table1Props> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto p-4">
      {/* Outer boundary with rounded corners */}
      <div className="border border-orange-900 rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-2 py-2 text-left border border-orange-900 bg-orange-300 text-gray-100 font-semibold text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-100 ${rowIndex % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-2 py-2 border border-orange-900 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl ${
                      colIndex === 0 ? "bg-orange-300 font-semibold" : ""
                    }`}
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;

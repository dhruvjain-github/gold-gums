import React from "react";

interface Table2Props {
  styles?: {
    tableClassName?: string;
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
  };
}

const Table2: React.FC<Table2Props> = ({ styles }) => {
  const defaultStyles = {
    tableClassName: "min-w-full border-collapse border border-gray-300",
    headerClassName: "bg-gray-200 text-left",
    rowClassName: "bg-white even:bg-gray-100",
    cellClassName: "border border-gray-300 px-4 py-2",
  };

  const mergedStyles = {
    ...defaultStyles,
    ...styles,
  };

  return (
    <div className="overflow-x-auto">
      <table className={mergedStyles.tableClassName}>
        <thead>
          <tr className={mergedStyles.headerClassName}>
            <th className={mergedStyles.cellClassName}>Product Grade</th>
            <th className={mergedStyles.cellClassName}>Starch Base</th>
            <th className={mergedStyles.cellClassName}>Water Mix ratio</th>
            <th className={mergedStyles.cellClassName}>Solids in %</th>
            <th className={mergedStyles.cellClassName}>Viscosity (+/- 3 sec)</th>
            <th className={mergedStyles.cellClassName}>pH</th>
            <th className={mergedStyles.cellClassName}>Packing in Kg</th>
          </tr>
        </thead>
        <tbody>
          <tr className={mergedStyles.rowClassName}>
            <td className={mergedStyles.cellClassName}>CGM300SD-60R</td>
            <td className={mergedStyles.cellClassName}>Maize</td>
            <td className={mergedStyles.cellClassName}>1:3</td>
            <td className={mergedStyles.cellClassName}>25</td>
            <td className={mergedStyles.cellClassName}>60</td>
            <td className={mergedStyles.cellClassName}>12-13</td>
            <td className={mergedStyles.cellClassName}>50</td>
          </tr>
          <tr className={mergedStyles.rowClassName}>
            <td className={mergedStyles.cellClassName}>CGM400SD-50R</td>
            <td className={mergedStyles.cellClassName}>Maize</td>
            <td className={mergedStyles.cellClassName}>1:4</td>
            <td className={mergedStyles.cellClassName}>20</td>
            <td className={mergedStyles.cellClassName}>50</td>
            <td className={mergedStyles.cellClassName}>12-13</td>
            <td className={mergedStyles.cellClassName}>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table2;

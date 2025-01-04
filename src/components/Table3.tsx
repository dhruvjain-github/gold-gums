import React from "react";

const Table3 = ({ styles }) => {
  return (
    <div className="overflow-x-auto">
      <table className={styles.tableClassName}>
        <thead>
          <tr className={styles.headerClassName}>
            <th className={styles.cellClassName}>Product Grade</th>
            <th className={styles.cellClassName}>Application</th>
            <th className={styles.cellClassName}>Water Mix ratio</th>
            <th className={styles.cellClassName}>Dosage per 100 kg</th>
            <th className={styles.cellClassName}>Viscosity (+/- 3 sec)</th>
            <th className={styles.cellClassName}>pH</th>
            <th className={styles.cellClassName}>Packing in Kg</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.rowClassName}>
            <td className={styles.cellClassName}>MS300SD-GK</td>
            <td className={styles.cellClassName}>Glue Kitchen</td>
            <td className={styles.cellClassName}>1:3</td>
            <td className={styles.cellClassName}>25</td>
            <td className={styles.cellClassName}>60</td>
            <td className={styles.cellClassName}>12-13</td>
            <td className={styles.cellClassName}>25</td>
          </tr>
          <tr className={styles.rowClassName}>
            <td className={styles.cellClassName}>MS300SD-MX</td>
            <td className={styles.cellClassName}>High Shear Mixer</td>
            <td className={styles.cellClassName}>1:3</td>
            <td className={styles.cellClassName}>15</td>
            <td className={styles.cellClassName}>60</td>
            <td className={styles.cellClassName}>12-13</td>
            <td className={styles.cellClassName}>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table3;

import React from "react";
import ProductSideNavbar from "../../../components/ProductSideNavbar";
import DetailBox from "../../../components/DetailBox";


interface Styles {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const AutoPlantAdhesivePage: React.FC = () => {
  const description: string =
    "Auto Plant Corrugation Adhesive is completely different from Manual Plant Corrugation Powder. Using Manual Corrugation Adhesives in Auto Plants results in sub-optimal bonding. Auto plants operate efficiently with steam, and heat transfer to the board is highly effective. These plants can utilize formulations based on Native Starch, while Manual Plants require Modified Starch. Auto Plants can also handle higher viscosity glues due to the availability of circulation systems. The 2-ply sheet undergoes reheating in the Double Backer, and bonding must remain stable without becoming brittle under the belt.";

  const productInfo: string =
    "Consistency in viscosity is crucial for smooth running of Auto Plants. The viscosity of Corrugation Adhesive must be consistent in the mixing tank during preparation and stable in the tray during operation. Viscosity drop due to circulation is minimal (10-15%). Our Amylodex Corrugation Powder for Auto Plants is made from a blend of modified and unmodified Maize Starch, providing high consistency. One adhesive grade can be used for both Single Facer and Double Backer applications. Viscosity slightly drops in Single Facer, while it remains stable at Double Backer.";

  const advantages: string[] = [
    "High initial tack, ensuring the machine runs at designed speed, crucial for green bond formation.",
    "Carrier-based formulation offers consistent viscosity with predictable behavior in both tank and tray.",
    "Compatible with running speeds up to 250 Mtr/Min, and tested at 210 Mtr/Min.",
    "100% fiber tear across all layers.",
    "Quick setting time.",
    "Compatible with waterproof resins and offers moisture resistance.",
    "Helps in achieving theoretical Compression Values.",
    "Provides strong bonding even with high compact Kraft liners.",
    "Low energy-consuming adhesives.",
  ];

  const additivesDescription: string =
    "Many high-end auto plants feature fully automated glue kitchens. Some Corrugators create their own glue using starch, caustic, and borax—basic ingredients for Corrugation Adhesives. Various additives and modified starches can enhance board properties. In auto glue kitchens, additives make up 15% of starch, while in non-automated kitchens, it’s 25%. This formulation offers similar performance to our premixed glues, providing cost savings by using native starch at the customer’s end.";

  const additives = [
    { name: "Hardener", description: "Includes BS, CS, and Booster for enhanced adhesion strength." },
    { name: "Anticracking", description: "Prevents cracks in adhesive applications for better durability." },
    { name: "Drying Agent", description: "Accelerates drying time for improved operational efficiency." },
    { name: "Waterproofing", description: "Provides water resistance to ensure durability." },
  ];

  const styles: Styles = {
    backgroundcolor: "bg-orange-100",
    headingcolor: "text-orange-950",
    textcolor: "text-gray-800",
    iconcolor: "text-red-800",
    boxcolor: "bg-orange-200",
  };

  return (
    <div className={`p-3 md:px-10 md:py-20 ${styles.backgroundcolor}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-auto">
          <ProductSideNavbar {...styles} />
        </div>
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
            imageSrc="/Corrugated.jpeg"
          />
        </div>
      </div>

      <div className="mt-6 bg-orange-200 rounded-md p-4 shadow-md">
        <h2 className={`text-xl font-extrabold ${styles.headingcolor} mb-4`}>
          Additives & Modified Starch for Auto Plants
        </h2>
        <p className={`mt-2 ${styles.textcolor} text-lg leading-relaxed`}>
          {additivesDescription}
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          {additives.map((item, index) => (
            <li key={index} className={`${styles.textcolor}`}>
              <span className="font-bold">{item.name}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default AutoPlantAdhesivePage;

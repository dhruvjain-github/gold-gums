import Link from "next/link";

interface FirmsProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const Firms: React.FC<FirmsProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor
}) => {
  const firmsData = [
    {
      id: 1,
      name: "Gold Gums",
      logo: "/path-to-goldgums-logo.png", // Replace with the actual path to the logo
      headline: "Gold Gums",
      description:
        "Central India's leading industrial adhesive manufacturer since 1999, providing innovative bonding solutions.Manufacturers of all types of paper-to-paper adhesives gum, for corrugated box, paper-tube, paper-cone, dona lamination etc.",
    },
    {
      id: 2,

      name: "Divy kulp",
      logo: "/path-to-divyakalp-logo.png", // Replace with the actual path to the logo
      headline: "Divy-kulp Industry",
      description:
        "Suppliers of all kinds of Modified starch, Dextrin, yellow Dextrin,white Dextrin,Malto Dextrin ,Starch Paste,liquid glucose and HDPE bags etc.",
    },
    {
      id: 3,

      name: "Dhruv Sales",
      logo: "/path-to-DhruvSales-logo.png", // Replace with the actual path to the logo
      headline: "Dhruv Sales",
      description:
        "Specialized in food-grade products like corn flour, corn starch, custurd powder, etc.",
    },
  ];

  return (
    <div className={`${backgroundcolor} py-12 px-6 lg:px-16`}>
      <h1 className={`text-4xl font-bold text-left ${headingcolor} mb-8`}>
        Our Branches
      </h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {firmsData.map((firm) => (
          <div
            key={firm.id}
            className={`shadow-xl rounded-lg overflow-hidden border border-orange-800 ${boxcolor}`}
          >
            {/* Firm Content */}
            <div className="p-6">
              {/* Image Placeholder (use logo size same as icon) */}
              {/* <img
                src={firm.logo}
                alt={`${firm.name} Logo`}
                className="w-8 h-8 object-contain mb-3" // Size matched with the icon (text-xl)
              /> */}
              <h2 className={`text-2xl font-bold ${headingcolor} mb-4`}>
                {firm.headline}
              </h2>
              <p className={`${textcolor} font-semibold`}>{firm.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Contact Button */}
      <div className="flex justify-center mt-8">
        <Link href="/contact">
          <button
            className={`bg-red-800 text-white px-6 py-2 rounded`}
          >
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Firms;

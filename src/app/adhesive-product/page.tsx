import Productoverview from "@/components/Productoverview";
import Productoverview2 from "@/components/Productoverview2";
import Producttop from "@/components/Producttop";
import Menu from "@/components/Menu";
import CorrugatedPic from "../../../public/Adhesive-Prod-Cardboard.jpg";
import PaperTubePic from "../../../public/Adhesive-Prod-PaperCone.jpg";
import PaperPlatePic from "../../../public/Adhesive-Prod-PaperPlate.jpg";
import DextrinPic from "../../../public/Adhesive-Prod-Dextrin.jpg";
import ModifiedStarchPic from "../../../public/Adhesive-Prod-ModifiedStarch.jpg";
import BookBindingPic from "../../../public/Adhesive-Prod-BookBinding.jpg";

export default function AdhesiveProductPage() {
  const backgroundcolor = "bg-orange-100";
  const headingcolor = "text-orange-950";
  const textcolor = "text-gray-800";
  const iconcolor = "text-red-800";
  const boxcolor = "bg-orange-200";

  const productOverviewData = [
    {
      header: "Explore Our Comprehensive Product Range",
      description:
        "At Gold Gums, we specialize in providing high-performance adhesives tailored for various applications. Our extensive product line ensures that your business can find the perfect solution for every bonding need. Experience reliability and excellence with our trusted adhesive products.",
      products: [
        {
          title: "Adhesives for Corrugated Boxes",
          description:
            "Our adhesives guarantee strong and durable bonds for automatic and semi-automatic corrugated industries.",
          imgLink: CorrugatedPic.src,
        },
        {
          title: "Adhesives for Paper Tubes and Paper Cones",
          description:
            "Designed for efficiency, our adhesives enhance paper tube and paper cone with high crushing strength.",
          imgLink: PaperTubePic.src,
        },
        {
          title: "Adhesives for paper plate and dona lamination",
          description:
            "Adhesives for paper plate and dona lamination, offering strong bonding and durable for food-grade applications.",
          imgLink: PaperPlatePic.src,
        },
      ],
    },
    {
      header: "Explore Our Specialty Starch-Based Products",
      description:
        "At Gold Gums, we offer a diverse range of specialty starch-based products tailored to meet your industrial needs. Our commitment to quality ensures that each product delivers exceptional performance.",
      products: [
        {
          title: "Dextrines: Versatile and Reliable Solutions",
          description:
            "Our yellow and white dextrines are perfect for various applications, providing excellent adhesion and stability.",
          imgLink: DextrinPic.src,
        },
        {
          title: "Modified Starches: Enhanced Performance for Industries",
          description:
            "Our modified starches are designed to improve product functionality and efficiency.",
          imgLink: ModifiedStarchPic.src,
        },
        {
          title: "Book Binding Adhesive, Gum Paste & Lye",
          description:
            "High-quality adhesive gum paste and lye for durable, seamless bookbinding and labelling with a professional finish.",
          imgLink: BookBindingPic.src,
        },
      ],
    },
  ];

  return (
    <div>
      <Producttop
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      <Productoverview
        header={productOverviewData[0].header}
        description={productOverviewData[0].description}
        products={productOverviewData[0].products}
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      <Productoverview2
        header={productOverviewData[1].header}
        description={productOverviewData[1].description}
        products={productOverviewData[1].products}
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />

      <Menu
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />
    </div>
  );
}

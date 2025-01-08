import React from "react";
import Productinfo7 from "./Productinfo7";
import Productinfo8 from "./Productinfo8";
import Productinfo9 from "./Productinfo9.tsx";

interface ProductDetailesProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductDetailes3: React.FC<ProductDetailesProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  // iconcolor,
  // boxcolor,
}) => {
  const productInfo1Data = {
    title:"P7",
    description:
      "P7 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo2Data = {
    title: "P8",
    description:
      "P8 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo3Data = {
    title:
      "P9",
    description:
      "P9 description",
    imgLink: "https://via.placeholder.com/150",
  };

  return (
    <div className={`${backgroundcolor} py-10`}>
      <Productinfo7
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo8
        title={productInfo2Data.title}
        description={productInfo2Data.description}
        points={productInfo2Data.points}
        imgLink={productInfo2Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo9
        title={productInfo3Data.title}
        description={productInfo3Data.description}
        imgLink={productInfo3Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
    </div>
  );
};

export default ProductDetailes3;

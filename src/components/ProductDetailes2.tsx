import React from "react";
import Productinfo4 from "./Productinfo4";
import Productinfo5 from "./Productinfo5";
import Productinfo6 from "./Productinfo6";

interface ProductDetailesProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductDetailes2: React.FC<ProductDetailesProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor,
}) => {
  const productInfo1Data = {
    title: "P4",
    description:"P4 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo2Data = {
    title: "P5",
    description:
      "P5 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo3Data = {
    title:
      "P6",
    description:
      "P6 description",
    imgLink: "https://via.placeholder.com/150",
  };

  return (
    <div className={`${backgroundcolor} py-10`}>
      <Productinfo4
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo5
        title={productInfo2Data.title}
        description={productInfo2Data.description}
        points={productInfo2Data.points}
        imgLink={productInfo2Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo6
        title={productInfo3Data.title}
        description={productInfo3Data.description}
        imgLink={productInfo3Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
    </div>
  );
};

export default ProductDetailes2;
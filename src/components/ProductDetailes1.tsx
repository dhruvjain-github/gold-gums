import React from "react";
import Productinfo1 from "./Productinfo1";
import Productinfo2 from "./Productinfo2";
import Productinfo3 from "./Productinfo3";

interface ProductDetailesProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ProductDetailes1: React.FC<ProductDetailesProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor,
}) => {
  const productInfo1Data = {
    title:"P1",
    description:
      "P1 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo2Data = {
    title: "P2",
    description:
      "P2 description",
    imgLink: "https://via.placeholder.com/150",
  };

  const productInfo3Data = {
    title:
      "P3",
    description:
      "P3 description",
    imgLink: "https://via.placeholder.com/150",
  };

  return (
    <div className={`${backgroundcolor} py-10`}>
      <Productinfo1
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo2
        title={productInfo2Data.title}
        description={productInfo2Data.description}
        points={productInfo2Data.points}
        imgLink={productInfo2Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
      <Productinfo3
        title={productInfo3Data.title}
        description={productInfo3Data.description}
        imgLink={productInfo3Data.imgLink}
        headingcolor={headingcolor}
        textcolor={textcolor}
      />
    </div>
  );
};

export default ProductDetailes1;

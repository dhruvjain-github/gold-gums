import Productinfo1 from "./Productinfo1";
import Productinfo2 from "./Productinfo2";

const ProductDetailes1 = () => {
    const productInfo1Data = {
        title:
          "Explore Our Premium Adhesives for Corrugated Boxes in Automatic and Semi-Automatic Plants",
        description:
          "Our adhesives for corrugated boxes are engineered for optimal performance in both automatic and semi-automatic production lines. Designed to enhance bonding strength and efficiency, they are the ideal choice for businesses seeking reliability and quality in their packaging solutions.",
        imgLink: "https://via.placeholder.com/150",
      };

      const productInfo2Data = {
        title: "Discover Our Premium Adhesives for Paper Tubes and Paper Cones",
        description:
          "Our adhesives for paper tubes and cones are engineered for superior performance in various industrial applications. Whether for packaging or manufacturing, our solutions ensure durability and efficiency.",
        points: [
          "Ideal for high-speed production lines and reliable bonding.",
          "Versatile solutions for diverse packaging needs and industries.",
          "Enhance productivity with our innovative adhesive formulations.",
        ],
        imgLink: "https://via.placeholder.com/150",
      };

      const productInfo3Data = {
        title:
          "Discover Our Premium Adhesives for Book Binding and Bottle Labeling Industries",
        description:
          "Our adhesives for book binding provide exceptional strength and flexibility, ensuring your books withstand the test of time. For bottle labeling, our specialized adhesives offer superior adhesion on various surfaces, enhancing your product's presentation and durability.",
        imgLink: "https://via.placeholder.com/150",
      };

  

  return (
    <div>
      <Productinfo1 
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
      />
      <Productinfo2
        title={productInfo2Data.title}
        description={productInfo2Data.description}
        points={productInfo2Data.points}
        imgLink={productInfo2Data.imgLink}
      />
      <Productinfo1 
        title={productInfo3Data.title}
        description={productInfo3Data.description}
        imgLink={productInfo3Data.imgLink}
      />
    </div>
  );
};

export default ProductDetailes1;

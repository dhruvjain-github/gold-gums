import Productinfo1 from "./Productinfo1";
;

const ProductDetailes2 = () => {
    const productInfo1Data = {
        title:
          "Discover the Versatility and Benefits of Dextrines for Your Business Needs",
        description:
          "Dextrines are versatile starch derivatives used in various applications, including adhesives, coatings, and food products. Their excellent binding properties and adaptability make them an essential choice for industries looking to enhance product performance and efficiency.",
        imgLink: "https://via.placeholder.com/150",
      };

      const productInfo2Data = {
        title:
          "Discover the Power of Modified Starches",
        description:
          "Modified starches are versatile ingredients used in various industries, including food, paper, and textiles. They enhance product stability, improve texture, and provide excellent binding properties.",
        imgLink: "https://via.placeholder.com/150",
      };

      const productInfo3Data = {
        title:
          "Discover the Versatility of Thin Boiling Starches for Your Business Needs",
        description:
          "Thin Boiling Starches are essential for various applications, including adhesives and coatings. Their unique properties enhance bonding strength and improve product performance, making them a valuable addition to your production line.",
        imgLink: "https://via.placeholder.com/150",
      };

  

  return (
    <div>
      <Productinfo1 
        title={productInfo1Data.title}
        description={productInfo1Data.description}
        imgLink={productInfo1Data.imgLink}
      />
        <Productinfo1 
        title={productInfo2Data.title}
        description={productInfo2Data.description}
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

export default ProductDetailes2;

import Image from "next/image";
import React from "react";



interface DetailBoxProps {
  styles: {
    boxcolor: string;
    headingcolor: string;
    textcolor: string;
    backgroundcolor: string;
    iconcolor: string;
  };
  description: string;
  advantages: string[];
  productInfo: string;
  imageSrc: string;
}

const DetailBox: React.FC<DetailBoxProps> = ({ styles, description, advantages, productInfo, imageSrc }) => {
  return (
    <div className={`${styles.boxcolor} p-6 flex flex-col justify-between md:flex-row gap-12 rounded-lg shadow-md`}>
      <div className="flex-1 max-w-3xl">
        <h2 className={`${styles.headingcolor} text-3xl font-extrabold mb-6`}>Description</h2>
        <p className={`${styles.textcolor} text-lg font-semibold mb-8 leading-relaxed`}>
          {description}
        </p>
        <div className={`${styles.backgroundcolor} p-4 rounded-lg shadow-inner mb-8`}>
          <h3 className={`${styles.headingcolor} text-xl lg27:text-2xl font-bold mb-2`}>Product Info</h3>
          <p className={`${styles.textcolor} lg27:text-lg  text-md font-medium`}>{productInfo}</p>
        </div>
        <h3 className={`${styles.headingcolor} text-2xl font-bold mb-4`}>Advantages</h3>
        <ul className={`${styles.textcolor} list-disc pl-5 space-y-3 text-lg`}>
          {advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 h-64 w-48 md:h-80 md:w-60 lg27:h-1/2 lg27:w-1/4  lg27:mr-20  rounded-lg overflow-hidden shadow-lg">
        <Image src={imageSrc} alt="Adhesive Product" className="h-full w-full object-cover" width={400} height={400} />
      </div>
    </div>
  );
};

export default DetailBox;

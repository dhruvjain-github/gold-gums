import Link from "next/link";

interface AboutusJourneyProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const AboutusJourney: React.FC<AboutusJourneyProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor
}) => {
  return (
    <section className={`flex flex-col lg:flex-row items-center justify-between ${backgroundcolor} px-6 lg:px-16 py-12  md:py-24 `}>
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${headingcolor}`}>
          Our Journey Since 1999: A Legacy of Quality
        </h1>
        <p className={`text-lg ${textcolor}`}>
          Founded in 1999, Gold Gums has grown to become Central India's foremost industrial adhesive manufacturer. Our commitment to quality and innovation has driven us to meet the diverse needs of various industries.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>Leading the way in adhesive solutions for businesses.</p>
          </li>
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>Empowering industries with unmatched bonding performance.</p>
          </li>
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>Your trusted partner in industrial adhesive excellence.</p>
          </li>
        </ul>
        <Link href="/contact" className={`text-red-800 font-semibold flex items-center space-x-1 hover:underline`}>
          <span>Contact</span>
          <span>➔</span>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <div className={`w-full lg:w-4/5 aspect-w-16 aspect-h-9 ${boxcolor} rounded-lg overflow-hidden`}>
          {/* <img src="/path-to-your-image.jpg" alt="Gold Gums Legacy" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutusJourney;

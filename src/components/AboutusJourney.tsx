import Link from "next/link";
import Image from "next/image";
import ggAbout1 from "../../public/ggAbout1.jpeg";

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
  boxcolor,
}) => {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between ${backgroundcolor} px-6 lg:px-16 py-12 md:py-24`}
    >
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1
          className={`text-4xl lg:text-5xl font-bold leading-tight ${headingcolor}`}
        >
          Our Journey Since 1999: A Legacy of Quality
        </h1>
        <p className={`text-lg font-semibold ${textcolor}`}>
          Founded in 1999, Gold Gums has grown to become Central India&apos;s
          foremost industrial adhesive manufacturer. Our commitment to quality
          and innovation has driven us to meet the diverse needs of various
          industries.
        </p>
        <ul className="space-y-4 font-semibold">
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>
              Central India&apos;s largest Corrugated Adhesive Manufacturer.
            </p>
          </li>
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>
              Leading modified starch supplier of our region.
            </p>
          </li>
          <li className="flex items-center space-x-3">
            <i className={`ri-checkbox-circle-fill ${iconcolor}`}></i>
            <p className={`${textcolor}`}>
              Your trusted partner in industrial adhesive excellence.
            </p>
          </li>
        </ul>
        <Link
          href="https://wa.me/919826070900"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-800 font-semibold flex items-center space-x-1 hover:underline"
        >
          <span>Contact</span>
          <span>➔</span>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <div className={`w-full lg:w-4/5 ${boxcolor} rounded-lg overflow-hidden`}>
          <Image
            src={ggAbout1.src}
            alt="Gold Gums Legacy"
            layout="responsive"
            width={1600}
            height={900}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutusJourney;

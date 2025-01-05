import Link from "next/link";
import Logo from "../../public/Logo.svg";

interface AboutusHeroProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const AboutusHero: React.FC<AboutusHeroProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center ${backgroundcolor} py-10 md:py-20 border-t border-b border-orange-900 md:border-0`}
    >
      {/* Logo container */}
      <div className="flex items-center bg-orange-200 mt-8 md:mt-12 text-red-800 px-2 py-2 border-2 border-red-800 rounded mb-5">
        <Link href="/">
          <img
            src={Logo.src}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
          />
        </Link>
      </div>

      {/* Centered content container */}
      <div className={`${boxcolor} rounded-md px-8 py-6 shadow-lg max-w-4xl text-center`}>
        <h1 className={`text-3xl font-bold mb-4 ${headingcolor}`}>
          Welcome to Gold Gums
        </h1>
        <p className={`text-base font-semibold ${textcolor}`}>
          Founded in 1999, Gold Gums has established itself as Central India's premier manufacturer of industrial adhesives. Our mission is to deliver innovative and reliable bonding solutions while upholding values of quality and commitment to our customers.
        </p>
      </div>
    </section>
  );
};

export default AboutusHero;

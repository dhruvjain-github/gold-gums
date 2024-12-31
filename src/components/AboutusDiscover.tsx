import Link from "next/link";

interface AboutusDiscoverProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  boxcolor: string;
}

const AboutusDiscover: React.FC<AboutusDiscoverProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between py-12 px-6 lg:px-16 ${backgroundcolor}`}
    >
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className={`text-4xl font-bold ${headingcolor}`}>
          Discover Our Solutions
        </h1>
        <p className={`text-lg ${textcolor}`}>
          Explore the various adhesive solutions that we offer for different industries. Our products are designed to meet the highest standards of quality and performance.
        </p>
        <Link href="/product">
          <button
            className={`bg-red-800 text-white px-6 py-2 rounded mt-6`}
          >
            Learn More
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className={`w-full lg:w-4/5 aspect-w-16 aspect-h-9  rounded-lg overflow-hidden bg-orange-200`}>
          {/* <img src="/path-to-image.jpg" alt="Discover Solutions" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutusDiscover;


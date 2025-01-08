import Link from "next/link";
import ggAbout2 from "../../public/ggAbout2.jpg"
import Image from "next/image";

interface AboutusDiscoverProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor?: string;
}

const AboutusDiscover: React.FC<AboutusDiscoverProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between py-12 px-6 lg:px-16 ${backgroundcolor}`}
    >
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
      <h1 className={`text-4xl font-bold ${headingcolor}`}>
  Discover Our Upcoming Solutions for Tiles Adhesive
</h1>
<p className={`text-lg ${textcolor}`}>
  Stay tuned as we unveil our latest range of tile adhesive solutions designed to cater to the unique needs of the construction industry. Our upcoming products promise enhanced durability, superior bonding strength, and eco-friendly options, ensuring the best performance for your projects.
</p>

        <Link href="/adhesive-product">
          <button
            className={`bg-red-800 text-white px-6 py-2 rounded mt-6`}
          >
            Learn More
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center ">
        <div className={`w-full lg:w-4/5 aspect-w-16 aspect-h-9  rounded-lg overflow-hidden bg-orange-200 border-2 border-orange-950 `} >
          <Image
          src={ggAbout2.src}
          className="w-full h-full object-cover"
          alt="About us"
          width={500}
          height={500}
           />
        </div>
      </div>
    </section>
  );
};

export default AboutusDiscover;


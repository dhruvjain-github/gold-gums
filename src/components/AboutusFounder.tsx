import Abhishek_jain from "../../public/Abhishek-Jain.jpeg";
import Devendra_jain from "../../public/Devendra-Jain.jpeg";
import Image from "next/image";


interface AboutusFounderProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const AboutusFounder: React.FC<AboutusFounderProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  boxcolor,
}) => {
  const leaders = [
    {
      name: "Er. Devendra Jain",
      position: "Founder",
      description:
        "Devendra Jain has over 50 years of experience in manufacturing and business management. Over five decades of experience in the paper industry, he has been the driving force behind the brand's success.",
      image: Devendra_jain, // Use imported image here
    },
    {
      name: "Er. Abhishek Jain",
      position: "Director",
      description:
        "Abhishek Jain, an Engineering graduate from 2000, has more than two decades of experience in adhesive manufacturing. He has successfully led the brand for the past 25 years, driving innovation and excellence in the industry.",
      image: Abhishek_jain, // Use imported image here
    },
  ];

  return (
    <div className={`px-6 md:px-12 py-10 md:py-20 ${backgroundcolor} lg27:px-64`}>
      <h1 className={`text-3xl md:text-4xl font-bold ${headingcolor}`}>About Us</h1>
      <p className={`text-${textcolor} mt-4`}>
        Meet the dedicated professionals behind Gold Gums.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${boxcolor} p-6 rounded-lg shadow-md`}
          >
            {/* Information Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-lg font-bold text-orange-950 lg27:text-2xl ` }>{leader.name}</h3>
              <h4 className={`text-sm font-semibold lg:mt-1 text-${textcolor}`}>{leader.position}</h4>
              <p className={`text-gray-900 font-semibold mt-2 lg27:text-lg`}>{leader.description}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4"></div>
            </div>

            {/* Image Section */}
            <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden mt-6 md:mt-0 md:ml-6">
              <Image
                src={leader.image.src} // Access `src` for imported images
                alt={leader.name}
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusFounder;

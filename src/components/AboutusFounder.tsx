import Link from "next/link";

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
  iconcolor,
  boxcolor
}) => {
  const leaders = [
    {
      name: "Er. Devendra Jain",
      position: "Founder",
      description:
        "Devendra Jain has over 45 years of experience in manufacturing and business management.Over two Decades of Experience in Adhesive industry, he has been the driving force behind the brand's success.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      
    },
    {
      name: "Er. Abhishek jain",
      position: "CEO",
      description:
        "Abhishek Jain, an Engineering graduate from 2000, has over two decades of experience in adhesive manufacturing. He has successfully led the brand for the past 25 years, driving innovation and excellence in the industry.",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      
    },
  ];

  return (
    <div className={`px-6 md:px-12 py-10 md:py-20 ${backgroundcolor}`}>
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
              <h3 className={`text-lg font-bold text-orange-950`}>{leader.name}</h3>
              <h4 className={`text-sm font-semibold text-${textcolor}`}>{leader.position}</h4>
              <p className={`text-gray-900 font-semibold mt-2`}>{leader.description}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
              </div>
            </div>

            {/* Image Section */}
            <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden mt-6 md:mt-0 md:ml-6">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutusFounder;

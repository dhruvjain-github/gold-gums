"use client"
import { useState } from "react";

interface Location {
  name: string;
  address: string;
  map: string;
}

interface ContactLocationProps {
  backgroundcolor: string;
  headingcolor: string;
  textcolor: string;
  iconcolor: string;
  boxcolor: string;
}

const ContactLocation: React.FC<ContactLocationProps> = ({
  backgroundcolor,
  headingcolor,
  textcolor,
  iconcolor,
  boxcolor,
}) => {
  const locations: Location[] = [
    {
      name: "Industry",
      address: "Lahdara Bhopal road Sagar, Mp 470001 In",
      map: "https://maps.google.com/maps?q=23.826643,78.6892778&z=15&output=embed",
    },
    {
      name: "Office",
      address: "Chameli Chouk Sagar, Mp 470002 In",
      map: "https://maps.google.com/maps?q=23.8376625,78.7310156&z=15&output=embed", 
    },
  ];

  const [mapLink, setMapLink] = useState<string>(locations[0].map);

  return (
    <section className={`py-20 md:py-40 flex flex-wrap items-start justify-between ${backgroundcolor} px-8 md:px-16`}>
      <div className="max-w-lg">
        <h1 className={`text-3xl font-bold ${headingcolor} mb-4`}>Locations</h1>
        <p className={`text-base ${textcolor} mb-8`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="space-y-8">
          {locations.map((location, index) => (
            <div key={index}>
              <h4 className={`text-lg font-semibold ${headingcolor}`}>
                {location.name}
              </h4>
              <p className={`text-sm ${textcolor}`}>{location.address}</p>
              <button
                onClick={() => setMapLink(location.map)}
                className={`text-sm ${iconcolor} font-semibold mt-2 inline-block`}
              >
                View Office
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div className={`bg-gray-200 rounded-md w-full h-96 md:h-[500px] ${boxcolor}`}>
          <iframe
            src={mapLink}
            title="Map Location"
            className="w-full h-full rounded-md"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;

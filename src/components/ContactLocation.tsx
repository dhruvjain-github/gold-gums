"use client";
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
  const [loading, setLoading] = useState<boolean>(true);

  const handleMapLoad = () => {
    setLoading(false); // Set loading to false once the map has loaded
  };

  return (
    <section
      className={`py-10 md:py-20 flex flex-col md:flex-row items-start justify-between gap-8 ${backgroundcolor} px-6 md:px-16 lg27:px-64`}
    >
      {/* Locations Section */}
      <div className="w-full md:w-1/2">
        <div className="bg-orange-200 rounded-lg p-5 shadow-md">
          <h1 className={`text-2xl md:text-3xl font-bold ${headingcolor} mb-4`}>
            Locations
          </h1>
          <p className={`text-sm md:text-base ${textcolor} mb-6`}>
            We have multiple locations in Sagour. You can visit our office at
            the given times.
          </p>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index}>
                <h4 className={`text-lg font-semibold ${headingcolor}`}>
                  {location.name}
                </h4>
                <p className={`text-sm ${textcolor} font-medium`}>
                  {location.address}
                </p>
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

        {/* Timing Section */}
        <div className="mt-8 bg-orange-900 text-gray-100 font-semibold p-5 rounded-lg shadow-md">
          <h4 className="text-lg md:text-xl text-orange-100 font-bold mb-4">
            Access on Given Time
          </h4>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-orange-700">
                  <th className="text-left py-2 px-2 md:px-4">Day</th>
                  <th className="text-left py-2 px-2 md:px-4">Working Time</th>
                  <th className="text-left py-2 px-2 md:px-4">Lunch Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-orange-700">
                  <td className="py-2 px-2 md:px-4">Monday - Friday</td>
                  <td className="py-2 px-2 md:px-4">11:00 AM - 8:00 PM</td>
                  <td className="py-2 px-2 md:px-4">1:00 PM - 2:00 PM</td>
                </tr>
                <tr className="border-b border-orange-700">
                  <td className="py-2 px-2 md:px-4">Saturday</td>
                  <td className="py-2 px-2 md:px-4">11:00 AM - 6:00 PM</td>
                  <td className="py-2 px-2 md:px-4">1:00 PM - 2:00 PM</td>
                </tr>
                <tr className="border-b border-orange-700">
                  <td className="py-2 px-2 md:px-4">Sunday</td>
                  <td className="py-2 px-2 md:px-4">Closed</td>
                  <td className="py-2 px-2 md:px-4">-</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 md:px-4">Public Holidays</td>
                  <td className="py-2 px-2 md:px-4">Closed</td>
                  <td className="py-2 px-2 md:px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* Map Section */}
<div className="w-full md:w-1/2  lg:mt-12">
  <div
    className={`relative bg-gray-200 rounded-lg w-full h-64 md:h-[500px] ${boxcolor} shadow-md`}
  >
    {loading && (
      <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
        <div className="loader border-4 border-t-4 border-gray-200 border-t-gray-800 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    )}
    <iframe
      src={mapLink}
      title="Map Location"
      className={`w-full h-full rounded-lg transition-opacity duration-300 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
      onLoad={handleMapLoad}
    />
  </div>
</div>

    </section>
  );
};

export default ContactLocation;

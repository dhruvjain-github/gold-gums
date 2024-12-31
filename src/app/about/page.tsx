import AboutusDiscover from "@/components/AboutusDiscover";
import AboutusFounder from "@/components/AboutusFounder";
import AboutusHero from "@/components/AboutusHero";
import AboutusJourney from "@/components/AboutusJourney";
import Firms from "@/components/Firms";

// Color constants
const backgroundcolor = "bg-orange-100";
const headingcolor = "text-orange-950";
const textcolor = "text-gray-800";
const iconcolor = "text-red-800";
const boxcolor = "bg-orange-200";

export default function AboutPage() {
  return (
    <div>
      <AboutusHero
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        boxcolor={boxcolor}
      />
      <AboutusJourney
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />
      <AboutusFounder
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />
      <Firms
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
        boxcolor={boxcolor}
      />
      <AboutusDiscover
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
      />
    </div>
  );
}

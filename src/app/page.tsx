"use client"
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import BestProduct from "@/components/BestProduct";
import Promoting from "@/components/Promoting";

const backgroundcolor = "bg-orange-100";
const headingcolor = "text-orange-950";
const textcolor = "text-gray-800";
const iconcolor = "text-red-800";
const boxcolor = "bg-orange-200";

export default function Home() {
  return (
    <div>
      <Hero
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
      />
      <Hero2
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor}
      />
      <BestProduct
        backgroundcolor={backgroundcolor}
        boxcolor={boxcolor}
        headingcolor={headingcolor}
        textcolor={textcolor}
        iconcolor={iconcolor} // Custom icon color for BestProduct
      />
      <Promoting
        backgroundcolor={backgroundcolor}
        headingcolor={headingcolor}
        textcolor={textcolor} // Custom text color for Promoting
        iconcolor={iconcolor} // Custom icon color for Promoting
      />
    </div>
  );
}
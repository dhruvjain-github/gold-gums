"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Logo from "../../public/Logo.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ggHero2 from "../../public/ggHero2.jpeg";

const Hero = ({ backgroundcolor = "bg-red-800", headingcolor, textcolor }) => {
  const slides = [
    {
      image: "https://printpackengrs.com/wp-content/uploads/2024/02/auto_plant.jpg",
      title: "Corrugated Adhesive",
      description:
        "Our adhesives offer unmatched strength and durability for Corrugated Box, Paper-Tubes, Paper-Cones, Paper-Sacks and many more. We offer a wide range of adhesives including PVA, Starch, Dextrin, and more.",
    },
    {
      image: ggHero2,
      title: "Modified Starch",
      description:
        "We are committed to providing high-quality modified starches for various industrial applications. Some of our products include Dextrin, yellow Dextrin, white Dextrin, Pasting Gum, and more.",
    },
    {
      image: "https://www.coresmith.net/wp-content/uploads/2022/09/papercones.jpg",
      title: "Paper-Cone/Tube Adhesive",
      description:
        "Our Paper-Cone/Tube Adhesive offers strong and reliable bonding for paper-based packaging. Ideal for creating durable cones and tubes, it ensures seamless performance in various industrial applications, from packaging to labeling, providing excellent adhesion and stability.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${backgroundcolor} px-4 md:px-12 text-center`}
    >
      <div className="flex items-center bg-orange-200 mt-8 md:mt-20 text-red-800 px-2 py-2 border-2 border-red-800 rounded">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
          />
        </Link>
      </div>

      <h1
        className={`text-2xl md:text-3xl font-bold ${headingcolor} max-w-2xl mt-3 md:leading-[1.2]`}
      >
        Industrial Adhesive Lead Since 1999
      </h1>

      <p
        className={`text-sm md:text-lg font-semibold ${textcolor} max-w-xl mt-4 md:mt-6`}
      >
        As Central India&apos;s foremost industrial adhesive manufacturer, Gold
        Gums has been setting the standard for quality and reliability since
        1999. Our innovative adhesive solutions are designed to meet the diverse
        needs of various industries, ensuring your operations run smoothly.
      </p>

      <Link
        href="/contact"
        className="mt-6 md:mt-8 px-4 py-2 border border-red-800 text-red-800 font-semibold rounded hover:bg-red-900 hover:text-white transition duration-300"
      >
        Contact Us
      </Link>

      <div className="my-10 w-full max-w-6xl border border-orange-900 rounded-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="rounded-lg shadow-lg"
          onSlideChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
                {typeof slide.image === "string" ? (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                    layout="fill"
                    priority
                  />
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                )}
              </div>
            </SwiperSlide>
          ))}

          <div
            className="swiper-button-prev"
            style={{ color: "#b91c1c", fontSize: "2rem" }}
          />
          <div
            className="swiper-button-next"
            style={{ color: "#b91c1c", fontSize: "2rem" }}
          />
          <div className="swiper-pagination">
            <style>
              {`
                .swiper-pagination-bullet {
                  background-color: #b91c1c !important;
                  opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                  background-color: #b91c1c !important;
                  opacity: 1;
                }
              `}
            </style>
          </div>
        </Swiper>
      </div>

      <div className="flex flex-col items-center w-full mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-red-800">
          {slides[currentSlide]?.title}
        </h2>
        <div className="bg-orange-200 text-orange-950 text-sm md:text-lg font-medium mt-4 px-4 font-semibold py-2 rounded-md shadow-md max-w-[80%] md:max-w-[50%]">
          {slides[currentSlide]?.description}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .swiper-button-prev, .swiper-button-next {
              font-size: 1.5rem !important;
            }
          }
          @media (max-width: 480px) {
            .swiper-button-prev, .swiper-button-next {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;

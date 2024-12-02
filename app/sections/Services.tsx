import React from "react";
import Slider from "react-slick";
import {
  FaCode,
  FaDraftingCompass,
  FaEdit,
  FaPaintBrush,
  FaSearch,
  FaServer,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/slick-custom.css";

import ServicesCustomPrevArrow from "../components/CustomPrevArrowServices";
import ServicesCustomNextArrow from "../components/CustomNextArrowServices";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <ServicesCustomPrevArrow />,
    nextArrow: <ServicesCustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: true,
          prevArrow: <ServicesCustomPrevArrow />,
          nextArrow: <ServicesCustomNextArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: <ServicesCustomPrevArrow />,
          nextArrow: <ServicesCustomNextArrow />,
        },
      },
    ],
  };

  return (
    <section
      id="services"
      className={`px-4 container h-full m-auto py-16 pb-[5%] mt-[5%] md:pb-0 md:py-6`}
    >
      <div className="mb-8">
        <h2 className="md:text-4xl text-[1.4rem] font-medium uppercase text-[var(--color-text)]">
          Services
        </h2>
        <div className="w-16 h-1 bg-[var(--color-text)] mt-1 mb-10 block rounded-full">
          &nbsp;
        </div>
        <Slider {...settings} className="max-w-[90%] m-auto pt-8">
          {[
            {
              icon: (
                <FaCode className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "Web Development",
              description:
                "Full-stack development services to build responsive and dynamic websites.",
            },
            {
              icon: (
                <FaPaintBrush className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "UI/UX",
              description:
                "Creating visually appealing and user-friendly web and mobile designs.",
            },
            {
              icon: (
                <FaSearch className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "SEO",
              description:
                "Improving your website's visibility on search engines through effective SEO strategies.",
            },
            {
              icon: (
                <FaDraftingCompass className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "Design to Code",
              description:
                "Transforming your designs from Figma or Adobe XD into functional code.",
            },
            {
              icon: (
                <FaEdit className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "Custom Edits",
              description:
                "Providing custom edits and updates to existing websites for improved functionality and design.",
            },
            {
              icon: (
                <FaServer className="text-4xl text-gray-500 mb-10 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
              ),
              title: "Hosting Services",
              description:
                "Providing reliable and secure hosting solutions for your websites.",
            },
          ].map((service, index) => (
            <div key={index} className="p-4 group">
              <div className="h-max">
                <div className="bg-[#e9e9e9aa] rounded-lg p-8 min-h-[280px] shadow-lg flex flex-col hover:bg-[#dbdbdb] hover:shadow-sm transition-all duration-300 ease-in-out">
                  <div className="flex-grow">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-text)] leading-[1.6rem]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;

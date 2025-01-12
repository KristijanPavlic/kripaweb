"use client";

import React from "react";

import Image from "next/image";
import logo from "@/public/about_logo.svg";
import { FaChartLine, FaHeadset, FaLightbulb, FaPalette } from "react-icons/fa";

export default function About() {
  const aboutData = [
    {
      icon: (
        <FaLightbulb className="text-4xl text-gray-500 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
      ),
      title: "Tailored Solutions",
      description:
        "Our web solutions are customized to meet the unique needs of each client, ensuring your business stands out.",
    },
    {
      icon: (
        <FaPalette className="text-4xl text-gray-500 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
      ),
      title: "Innovative Design",
      description:
        "We leverage the latest design trends and technologies to create websites that are both visually stunning and functional.",
    },
    {
      icon: (
        <FaChartLine className="text-4xl text-gray-500 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
      ),
      title: "Scalable Development",
      description:
        "Our development approach ensures your website can grow and adapt as your business evolves.",
    },
    {
      icon: (
        <FaHeadset className="text-4xl text-gray-500 group-hover:fill-[var(--color-accent)] transition-all duration-300 ease-in-out" />
      ),
      title: "Ongoing Support",
      description:
        "We offer continuous support and maintenance to keep your website running smoothly and efficiently.",
    },
  ];

  return (
    <section
      id="about"
      className={`px-4 container w-full m-auto py-16 pb-[5%]`}
    >
      <h2 className="md:text-4xl text-[1.4rem] font-medium uppercase text-[var(--color-text)]">
        About Us
      </h2>
      <div className="w-16 h-1 bg-[var(--color-text)] mt-1 mb-12 block rounded-full">
        &nbsp;
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">
        <div className="md:max-w-[70%]">
          <p className="text-base lg:text-xl lg:leading-8 leading-7 text-[var(--color-text)]">
            At KriPa Web, we strive to deliver cutting-edge web solutions that
            empower businesses to thrive in the digital landscape. Our team of
            experts is dedicated to providing innovative and customized services
            tailored to your specific needs. With a strong focus on quality and
            customer satisfaction, we ensure that your online presence is not
            just functional but also visually appealing and user-friendly.
            <br />
            <br /> Beyond web design, we offer SEO optimization and reliable
            hosting to keep your site fast, secure, and visible. Whether
            launching a new brand or enhancing an existing one, KriPa Web turns
            your vision into a dynamic digital experience that propels your
            business forward.
          </p>
        </div>
        <div>
          <Image
            src={logo}
            width={300}
            height={200}
            alt="KriPa Web logo"
            className="py-14 md:py-0"
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-8 mt-4 md:mt-16">
        {aboutData.map((card, index) => (
          <div
            key={index}
            className="group md:p-6 p-4 bg-[#e9e9e9aa] shadow-lg rounded-lg hover:bg-[#dbdbdb] hover:shadow-sm transition-all duration-300 ease-in-out"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mt-7 mb-3">{card.title}</h3>
            <p className="text-[var(--color-text)] leading-[1.6rem]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

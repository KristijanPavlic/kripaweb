"use client";

import { Montserrat_Alternates } from "next/font/google";
import React, { useEffect, useState } from "react";
import ProjectNavigation from "./ProjectNavigation";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Footer from "@/app/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/slick-custom.css";
import BackToTopButton from "./BackToTopBtn";
import Contact from "../sections/Contact";
import { CustomPrevArrow } from "./CustomPrevArrow";
import { CustomNextArrow } from "./CustomNextArrow";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

interface FullProjectProps {
  nextProject: string;
  projectName: string;
  projectServices: string;
  projectImages: string[];
  projectInfoHeading: string;
  projectInfo: string[] | any;
  projectTechnoHeading: string;
  projectTechno: string;
  projectFeaturesHeading: string;
  projectFeatures: string;
  projectLinkHeading: string;
  projectLink: string;
  projectURL: string;
}

const FullProject: React.FC<FullProjectProps> = ({
  nextProject,
  projectName,
  projectServices,
  projectImages,
  projectInfoHeading,
  projectInfo,
  projectTechnoHeading,
  projectTechno,
  projectFeaturesHeading,
  projectFeatures,
  projectLinkHeading,
  projectLink,
  projectURL,
}) => {
  // --- 1. Track window width ---
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial width
      setWindowWidth(window.innerWidth);

      // Listener to update width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Condition to disable arrows on md or smaller
  // For Tailwind, `md` breakpoint is `768px`
  const isArrowsEnabled = windowWidth >= 768;

  const [imageLoading, setImageLoading] = useState<boolean[]>(
    Array(projectImages.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setImageLoading((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: false,
  });
  const { ref: technologiesRef, inView: technologiesInView } = useInView({
    triggerOnce: false,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: false,
  });
  const { ref: linkRef, inView: linkInView } = useInView({
    triggerOnce: false,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const updateGradient = (e: any) => {
      const buttons = document.querySelectorAll(".glass-button");
      buttons.forEach((button: Element) => {
        if (button instanceof HTMLElement) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          button.style.setProperty("--x", `${x}px`);
          button.style.setProperty("--y", `${y}px`);
        }
      });
    };

    document.addEventListener("mousemove", updateGradient);

    return () => {
      document.removeEventListener("mousemove", updateGradient);
    };
  }, []);

  // --- 2. Determine arrow visibility based on screen size ---
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isArrowsEnabled,
    draggable: true,
    swipe: true,
    touchMove: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <ProjectNavigation />
      <AnimatePresence>
        <main>
          <section className="px-4 container w-full m-auto py-16">
            <div>
              <h1
                className={`${montserratAlternates.className} xl:text-[8rem] lg:text-[5rem] text-[3rem] xl:leading-[8rem] lg:leading-[5rem] leading-[4rem] text-center font-black block`}
              >
                {projectName}
              </h1>

              <h3 className="xl:text-[2.2rem] lg:text-[2rem] text-[1.2rem] xl:leading-[2rem] lg:leading-[2rem] leading-[2rem] text-center text-[var(--color-text)] mt-10 lg:mt-16 block">
                {projectServices}
              </h3>

              <Slider
                {...settings}
                className="md:max-w-[92%] my-10 lg:my-20 m-auto"
              >
                {projectImages.map((image, index) => (
                  <div key={index} className="relative">
                    {imageLoading[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="loader"></div>
                      </div>
                    )}
                    <Image
                      src={image}
                      alt={`${projectName} ${index + 1}`}
                      width={1800}
                      height={(1200 / 16) * 12}
                      className={`w-full flex object-contain rounded-lg ${
                        imageLoading[index] ? "opacity-0" : "opacity-100"
                      } transition-opacity duration-500`}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                ))}
              </Slider>

              <div className="flex flex-wrap gap-12 pt-12">
                <motion.div
                  ref={infoRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: infoInView ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="bg-[#e9e9e9aa] md:p-6 p-4 rounded-lg shadow-lg">
                    <h4 className="text-[var(--color-primary)] md:text-[2rem] text-[1.4rem] md:mb-8 mb-5 font-semibold ">
                      {projectInfoHeading}
                    </h4>
                    <p className="text-[var(--color-text)] text-lg leading-8">
                      {projectInfo}
                    </p>
                  </div>
                </motion.div>

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-12 w-full">
                  <motion.div
                    ref={technologiesRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: technologiesInView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="bg-[#e9e9e9aa] md:p-6 p-4 rounded-lg shadow-lg">
                      <h4 className="text-[var(--color-primary)] md:text-[2rem] text-[1.4rem]  md:mb-8 mb-5 font-semibold ">
                        {projectTechnoHeading}
                      </h4>
                      <ul className="text-[var(--color-text)] text-lg leading-8">
                        {projectTechno.split(",").map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    ref={featuresRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: featuresInView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="bg-[#e9e9e9aa] md:p-6 p-4 rounded-lg shadow-lg h-fit">
                      <h4 className="text-[var(--color-primary)] md:text-[2rem] text-[1.4rem] md:mb-8 mb-5 font-semibold ">
                        {projectFeaturesHeading}
                      </h4>
                      <ul className="text-[var(--color-text)] text-lg leading-8">
                        {projectFeatures.split(",").map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    ref={linkRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: linkInView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="bg-[#e9e9e9aa] md:p-6 p-4 rounded-lg shadow-lg h-fit">
                      <h4 className="text-[var(--color-primary)] md:text-[2rem] text-[1.4rem] md:mb-8 mb-5 font-semibold ">
                        {projectLinkHeading}
                      </h4>
                      <div className="flex gap-12">
                        <Link
                          href={projectURL}
                          target="_blank"
                          className="text-[var(--color-text)] text-lg hover:underline hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out"
                        >
                          {projectLink}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              ref={contactRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: contactInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Contact />
            </motion.div>
          </section>
        </main>
      </AnimatePresence>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default FullProject;

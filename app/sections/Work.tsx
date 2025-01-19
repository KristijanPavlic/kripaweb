"use client";

import { Montserrat_Alternates } from "next/font/google";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const projects = [
  {
    title: "Designo",
    shortTitle: "Designo",
    src: "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/designo-IXrXNBI89GvX5CsfIjnAsZGODiAYUs.png",
  },
  /* {
    title: "Recipify",
    shortTitle: "Recipify",
    src: "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/recipify-YJEycScBgBryWkdHPBBRO8ofH2lcR1.png",
  }, */
  {
    title: "CarSpot",
    shortTitle: "CarSpot",
    src: "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/carspot_preview-ZflNgtnWywMQhVrrn1KnRxw5MAYD3A",
    link: "/carspot",
    url: "https://car-spot.vercel.app/",
  },
  {
    title: "Zrinski Photography",
    shortTitle: "Zrinski Photo",
    src: "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/zrinski_preview-rEV2ERzygANeRJAf52DgZxWc6ulF4V.png",
    link: "/zrinski",
    url: "https://zrinski-photo.com",
  },
  {
    title: "Dulafra Foto Corner",
    shortTitle: "Dulafra",
    src: "https://rdbh1o39u7awif7j.public.blob.vercel-storage.com/images/dulafra_preview-hkIgAfgSJoccKpJS5hVSgffLr2yyiJ.png",
    link: "/dulafra",
    url: "https://dulafra.com",
  },
];

export default function Work() {
  const [imageLoading, setImageLoading] = useState<boolean[]>(
    Array(projects.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setImageLoading((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

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

  return (
    <section
      id="work"
      className={`px-4 container w-full m-auto py-16 mt-[10%] pb-[5%]`}
    >
      <div>
        <h2 className="md:text-4xl text-[1.4rem] font-medium uppercase text-[var(--color-text)]">
          Case Studies
        </h2>
        <div className="w-16 h-1 bg-[var(--color-text)] mt-1 block rounded-full">
          &nbsp;
        </div>
      </div>
      <div className="flex flex-col gap-24 py-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-[#e9e9e9aa] rounded-lg shadow-lg flex justify-between lg:gap-8 gap-6 ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col hover:scale-[1.01] hover:bg-[#dbdbdb] hover:shadow-none transition-all duration-300 ease-in-out`}
          >
            <div className="md:p-6 p-4 flex flex-col justify-evenly">
              <h2
                className={`${montserratAlternates.className} xl:text-[8rem] lg:text-[5rem] md:text-[4rem] text-[3rem] xl:leading-[8rem] lg:leading-[5rem] md:leading-[4rem] leading-[3rem] lg:pb-0 pb-12 font-black`}
              >
                {project.shortTitle}
              </h2>
              {!project.link ? (
                <div>
                  <h3 className="text-2xl mt-10 text-[var(--color-text)] hover:no-underline">
                    Currently in development
                  </h3>
                </div>
              ) : (
                <div className="flex flex-col xl:gap-10 lg:gap-8 md:gap-8 md:flex-row gap-6">
                  <Link
                    href={project.link || "/"}
                    prefetch={true}
                    className="w-fit flex gap-2 items-center text-xl lg:text-2xl text-[var(--color-text)] transition-all duration-300 hover:text-[var(--color-accent)] hover:no-underline"
                  >
                    View project
                  </Link>
                  <Link
                    href={project.url || "/"}
                    target="_blank"
                    className="w-fit flex gap-2 items-center text-xl lg:text-2xl text-[var(--color-text)] transition-all duration-300 hover:text-[var(--color-accent)] hover:no-underline"
                  >
                    Live site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
            <div className="md:p-6 p-4 relative w-full">
              {imageLoading[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="loader"></div>
                </div>
              )}
              {!project.src ? (
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-lg">Currently in development</h3>
                </div>
              ) : (
                <Image
                  src={project.src || ""}
                  alt={project.title}
                  width={1000}
                  height={700}
                  className={`rounded-lg ${
                    imageLoading[index] ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-500`}
                  onLoad={() => handleImageLoad(index)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

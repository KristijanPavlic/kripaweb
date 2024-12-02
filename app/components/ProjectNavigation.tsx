"use client";

import { Montserrat_Alternates } from "next/font/google";

import "../globals.css";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

export default function ProjectNavigation() {
  const path = usePathname();
  console.log(path);

  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);

  const projects = ["CarSpot", "Zrinski", "Dulafra"];

  useEffect(() => {
    setNavVisible(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !(navRef.current as any).contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      ref={navRef}
      className={`z-40 bg-[var(--color-background)] sticky top-0 py-4 border-b-[var(--color-primary)] border-b-2 w-full transition-all duration-800 ease-in-out ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center z-50 bg-[var(--color-background)] px-4 container w-full m-auto">
        <Link
          href="/"
          className={`${montserratAlternates.className} flex gap-2 text-2xl font-medium hover:text-[var(--color-accent)] z-[51] transition-all duration-300 ease-in-out`}
        >
          <span>KriPa</span>
          <span className="text-[var(--color-accent)]">Web</span>
        </Link>
        <div className="lg:hidden flex items-center z-[999]">
          {isMobile && ( 
            <ScrollLink
              to="contact"
              href="#contact"
              smooth={true}
              duration={500}
              offset={-60}
              className="hover:cursor-pointer glass-button py-2 px-4 mr-6 bg-accent text-background rounded-lg transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          )}
          <div
            onClick={toggleMenu}
            className={`hamburger ${menuOpen ? "open" : ""}`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <ul
          className={`z-50 bg-[var(--color-background)] lg:flex lg:space-x-14 text-lg lg:static absolute left-0 pb-6 lg:pb-0 lg:border-none border-b-[var(--color-primary)] border-b-2 w-full lg:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-200px] opacity-0 lg:opacity-100"
          } lg:flex lg:justify-end lg:items-center`}
        >
          <li className="lg:pt-0 pt-6 lg:mt-0 lg:mx-0 mx-auto text-center">
            <Link
              href="/"
              prefetch={true}
              className="hover:text-[var(--color-accent)] hover:cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          {projects.map((project, index) => (
            <li
              key={index}
              className="lg:pt-0 pt-6 lg:mt-0 lg:mx-0 mx-auto text-center"
            >
              <Link
                href={`/${project.toLowerCase()}`}
                prefetch={true}
                className={`hover:text-[var(--color-accent)] hover:cursor-pointer transition-all duration-300 ease-in-out ${path.includes(project.toLocaleLowerCase()) ? "text-[var(--color-accent)]" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {project}
              </Link>
            </li>
          ))}
          {!isMobile && (
            <li className="mt-8 lg:mt-0 lg:mx-0 mx-auto text-center">
              <ScrollLink
                to="contact"
                href="#contact"
                smooth={true}
                duration={500}
                offset={-60}
                className="hover:cursor-pointer glass-button mt-8 lg:px-8 py-2 px-4 bg-accent text-background rounded-lg transition-all duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
}

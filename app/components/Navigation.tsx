"use client";

import { Montserrat_Alternates } from "next/font/google";

import "../globals.css";

import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

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
        <div className="md:hidden flex items-center z-[999]">
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
          className={`z-50 bg-[var(--color-background)] md:flex md:space-x-14 text-lg md:static absolute left-0 pb-6 md:pb-0 md:border-none border-b-[var(--color-primary)] border-b-2 w-full md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen
              ? "top-16 opacity-100"
              : "top-[-200px] opacity-0 md:opacity-100"
          } md:flex md:justify-end md:items-center`}
        >
          <li className="md:pt-0 pt-6 md:mt-0 md:mx-0 mx-auto text-center">
            <ScrollLink
              to="services"
              href="#services"
              smooth={true}
              duration={500}
              offset={-60}
              className="hover:text-[var(--color-accent)] hover:cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </ScrollLink>
          </li>
          <li className="mt-4 md:pt-0 md:mt-0 md:mx-0 mx-auto text-center">
            <ScrollLink
              to="work"
              href="#work"
              smooth={true}
              duration={500}
              offset={-60}
              className="hover:text-[var(--color-accent)] hover:cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </ScrollLink>
          </li>
          <li className="mt-4 md:mt-0 md:mx-0 mx-auto text-center">
            <ScrollLink
              to="about"
              href="#about"
              smooth={true}
              duration={500}
              offset={-60}
              className="hover:text-[var(--color-accent)] hover:cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              About
            </ScrollLink>
          </li>
          {!isMobile && (
            <li className="mt-4 md:mt-0 md:mx-0 mx-auto text-center">
              <ScrollLink
                to="contact"
                href="#contact"
                smooth={true}
                duration={500}
                offset={-60}
                className="hover:cursor-pointer glass-button mt-8 md:px-8 py-2 px-4 bg-accent text-background rounded-lg transition-all duration-300 ease-in-out"
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

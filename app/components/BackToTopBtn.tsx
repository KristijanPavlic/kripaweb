"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Using react-icons for the arrow icon

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed sm:bottom-28 sm:right-20 bottom-16 right-5 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] shadow-2xl hover:bg-[var(--color-text)] hover:text-[var(--color-background)]  transition-all duration-300 ease-in-out"
        aria-label="Back to Top"
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

import { Montserrat_Alternates } from "next/font/google";

import { Link } from "react-scroll";
import { useEffect } from "react";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Hero() {
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
      id="hero"
      className="relative min-h-[90svh] md:pt-[5%] pt-[10%] md:pb-[10%] pb-[20%] px-4 container m-auto"
    >
      <h1
        className={`${montserratAlternates.className} xl:text-[7rem] xl:leading-[8rem] md:text-[4rem] md:leading-[6rem] text-[2rem] leading-[4rem] md:font-black font-bold`}
      >
        Building <span className="text-[var(--color-accent)]">Websites</span>{" "}
        That Define
        <span className="text-[var(--color-accent)]"> Success</span> in the
        Digital Age
      </h1>
      <p className="text-lg lg:text-xl mt-16 text-[var(--color-text)]">
        Tailored web development services designed to meet your goals and exceed
        expectations.
      </p>
      <div className="flex sm:gap-8 mt-6 gap-6">
        <Link
          to="contact"
          href="#contact"
          smooth={true}
          duration={500}
          offset={-60}
          className="hover:cursor-pointer glass-button mt-8 sm:px-8 py-3 px-6 bg-accent text-background rounded-lg transition-all duration-300 ease-in-out"
        >
          Get in Touch
        </Link>
        <Link
          to="work"
          href="#work"
          smooth={true}
          duration={500}
          offset={-60}
          className="hover:cursor-pointer glass-button mt-8 sm:px-8 py-3 px-6 bg-primary text-background rounded-lg transition-all duration-300 ease-in-out"
        >
          Case Studies
        </Link>
      </div>
      {
        <div className="flex justify-center pb-16">
          <Link
            to="services"
            href="#services"
            smooth={true}
            duration={500}
            offset={-60}
            className="absolute bottom-12 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-all duration-300 ease-in-out"
          >
            Scroll to Discover
            <div className="mouse-icon mt-2">
              <span className="mouse">
                <span className="mouse-scroll"></span>
              </span>
            </div>
          </Link>
        </div>
      }
    </section>
  );
}

"use client";

import { Montserrat_Alternates } from "next/font/google";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopBtn";
import Services from "./sections/Services";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setLoading(false);
              setTimeout(() => {
                setHideOverlay(true); // Hide the overlay after the animation
                document.body.style.overflow = "auto";
              }, 1000); // This delay matches the animation duration
            }, 200); // Slight delay before starting the cover transition
            return 100;
          }

          // Dynamic interval adjustment
          const newIncrement = prev < 70 ? 2.5 : prev < 90 ? 1 : 1.5;
          return prev + newIncrement;
        });
      }, 16); // Base interval time
    }
    return () => clearInterval(interval);
  }, [loading]);

  const overlayVariants = {
    hidden: { y: "0%" },
    visible: { y: "-100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: false,
  });
  const { ref: workRef, inView: workInView } = useInView({
    triggerOnce: false,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: false,
  });

  return (
    <>
      <AnimatePresence>
        {!hideOverlay && (
          <motion.div
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            variants={overlayVariants}
            className="overflow-y-hidden fixed inset-0 flex items-center justify-center bg-[var(--color-background)] z-50 border-b-2 border-[var(--color-primary)]"
          >
            <div
              className={`${montserratAlternates.className} text-6xl font-bold`}
            >
              {Math.floor(percentage)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        <Navigation />
        <AnimatePresence>
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: servicesInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Services />
          </motion.div>
          <motion.div
            ref={workRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: workInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Work />
          </motion.div>
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: aboutInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <About />
          </motion.div>
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: contactInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Contact />
          </motion.div>
        </AnimatePresence>
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
}

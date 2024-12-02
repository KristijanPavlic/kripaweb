"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Sending message...");
    try {
      const res = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        toast.dismiss();
        toast.success("Message sent! We will get back to you shortly.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
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

  const emailAddress = "kristijan@kripaweb.com";

  const copyEmailToClipboard = () => {
    toast.success("Email copied to clipboard!", {
      duration: 3000,
      icon: "📋",
    });
    navigator.clipboard.writeText(emailAddress);
  };

  return (
    <section id="contact" className={`px-4 container w-full m-auto py-16`}>
      <div className="grid xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 grid-rows-5">
        <div className="flex items-center xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-3 lg:col-start-1 lg:row-start-1 lg:col-end-3 lg:row-end-2 border-y-2 border-[var(--color-priamry)]">
          <p className="2xl:text-[12rem] 2xl:leading-[11rem] font-bold xl:text-[10rem] xl:leading-[9rem] lg:text-[7rem] lg:leading-[6rem] md:text-[4rem] text-[3.5rem] uppercase">
            Get in Touch
          </p>
        </div>
        <div className="xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 lg:col-start-1 lg:row-start-2 lg:col-end-2 lg:row-end-3 border-y-2 border-x-2 xl:border-t-2 border-t-0 xl:border-l-2 lg:border-r-2 border-r-0 border-l-0 border-[var(--color-priamry)]">
          <div className="2xl:p-6 p-4">
            <h3 className="uppercase font-bold text-3xl pb-6">Location</h3>
            <div className="text-[var(--color-text)] pb-1">KriPa Web</div>
            <Link
              href="https://www.google.com/maps/place/Vankina+ul.+8,+10000,+Zagreb/@45.7810652,15.9919123,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4765d60d3ae3f277:0xbb41e9ab0398f64d!8m2!3d45.7810615!4d15.9944872!16s%2Fg%2F11c2hlwx5h!5m1!1e1?entry=ttu"
              target="_blank"
              aria-label="Google Maps"
              className="pb-1 text-[var(--color-text)] transiation-all hover:text-[var(--color-accent)] hover:underline"
            >
              Vankina ulica 8 <br />
              Zagreb, Croatia
            </Link>
          </div>
        </div>
        <div className="xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2 lg:col-start-2 lg:row-start-2 lg:col-end-3 lg:row-end-3 border-x-0 border-y-2 xl:border-t-2 border-t-0 border-[var(--color-priamry)]">
          <div className="2xl:p-6 p-4">
            <h3 className="uppercase font-bold text-3xl pb-6">Contact</h3>
            <div className="pb-1 text-[var(--color-text)]">
              <button
                onClick={copyEmailToClipboard}
                className="text-[var(--color-text)] transiation-all hover:text-[var(--color-accent)] hover:underline"
              >
                {emailAddress}
              </button>
            </div>
            <div className="text-[var(--color-text)]">
              <Link
                href="tel:+385995063902"
                className="text-[var(--color-text)] transiation-all hover:text-[var(--color-accent)] hover:underline"
              >
                +385 99 506 3902
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 lg:col-start-1 lg:row-start-3 lg:col-end-2 lg:row-end-4 border-2 border-t-0 xl:border-l-2 lg:border-r-2 border-r-0 border-l-0 border-[var(--color-priamry)]">
          <div className="2xl:p-6 p-4">
            <h3 className="uppercase font-bold text-3xl pb-6">Working hours</h3>
            <div className="pb-1 flex justify-between gap-5 text-[var(--color-text)] max-w-[380px]">
              <div>Monday - Friday:</div>
              <div>09:00 to 21:00</div>
            </div>
            <div className="pb-1 flex justify-between gap-5 text-[var(--color-text)] max-w-[380px]">
              <div>Saturdays:</div>
              <div>09:00 to 16:00</div>
            </div>
            <div className="pb-1 flex justify-between gap-5 text-[var(--color-text)] max-w-[380px]">
              <div>Sundays:</div>
              <div>Closed</div>
            </div>
            <div className="pb-1 flex justify-between gap-5 text-[var(--color-text)] max-w-[380px]">
              <div>Public Holidays:</div>
              <div>Closed</div>
            </div>
          </div>
        </div>
        <div className="xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-4 lg:col-start-2 lg:row-start-3 lg:col-end-2 lg:row-end-4 border-r-0 border-b-2 border-[var(--color-priamry)]">
          <div className="2xl:p-6 p-4">
            <h3 className="uppercase font-bold text-3xl pb-6">Follow Us</h3>
            <div className="pb-1">
              <ul className="flex flex-col gap-6">
                <li className="w-fit">
                  <Link
                    href="https://www.linkedin.com/company/kripaweb/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="text-[var(--color-text)] flex items-center text-base hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-2"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="mt-24 w-full flex lg:flex-row flex-col m-auto justify-between">
          <div>
            <h3 className="md:text-4xl text-3xl font-semibold uppercase mb-4 text-[var(--color-text)]">
              Got a cool project?
            </h3>
            <h3 className="md:text-4xl text-3xl font-semibold uppercase mb-14 text-[var(--color-text)]">
              Tell us about it.
            </h3>
          </div>
          <form
            className="flex flex-col gap-14 lg:w-[60%] w-full"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full pb-2 bg-transparent border-b-2 border-[var(--color-primary)] focus:border-[var(--color-accent)] focus:outline-none transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder=""
              />
              <label
                htmlFor="name"
                className={`absolute left-0 text-lg font-medium text-[var(--color-primary)] transition-all ${
                  name ? "transform -translate-y-6 scale-75" : "translate-y-0"
                }`}
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full pb-2 bg-transparent border-b-2 border-[var(--color-primary)] focus:border-[var(--color-accent)] focus:outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=""
              />
              <label
                htmlFor="email"
                className={`absolute left-0 text-lg font-medium text-[var(--color-primary)] transition-all ${
                  email ? "transform -translate-y-6 scale-75" : "translate-y-0"
                }`}
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                rows={6}
                className="w-full h-fit p-2 bg-transparent border-2 rounded-lg border-[var(--color-primary)] focus:border-[var(--color-accent)] focus:outline-none transition"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder=""
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-0 text-lg font-medium text-[var(--color-primary)] transition-all ${
                  message
                    ? "transform -translate-y-6 -translate-x-2 scale-75"
                    : "translate-y-2 translate-x-2"
                }`}
              >
                Message
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="hover:cursor-pointer glass-button px-4 py-3 bg-accent text-background rounded-lg transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
              <Toaster
                toastOptions={{
                  className: "mt-16",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

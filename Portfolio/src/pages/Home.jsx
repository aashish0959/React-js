import React, { useState, useEffect } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const words = ["Fronten developer", "Photographer"];
  const animationDelay = 300;

  useEffect(() => {
    const interval = setInterval(() => {
      typeWriterEffect();
    }, animationDelay);

    return () => clearInterval(interval);
  }, [currentLetterIndex, currentWordIndex]);

  const typeWriterEffect = () => {
    setCurrentLetterIndex((prevIndex) => {
      if (prevIndex < words[currentWordIndex].length) {
        return prevIndex + 1;
      } else {
        setCurrentWordIndex((prevWordIndex) => {
          const nextWordIndex = (prevWordIndex + 1) % words.length;
          return nextWordIndex; // Cycle through words
        });
        return 0; // Reset letter index to start next word
      }
    });
  };

  return (
    <div>
      <header className="bg-gray-900 text-white py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-12">
          {/* Left Section: Text and Typewriter */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide leading-tight">
              Hi! 👋 I'm <span className="text-yellow-400">Aashish Jadav</span>
            </h1>
            <section className="cd-intro">
              <h1 className="cd-headline letters type">
                <span>I'm </span>
                <span className="cd-words-wrapper">
                  <b
                    className={
                      currentLetterIndex === words[currentWordIndex].length
                        ? "is-visible"
                        : ""
                    }
                  >
                    {words[currentWordIndex].substring(0, currentLetterIndex)}
                  </b>
                </span>
              </h1>
            </section>
            <p className="text-gray-300 text-lg lg:text-xl mb-8 leading-relaxed">
              I specialize in crafting responsive, user-friendly websites that
              not only look great but also drive engagement and growth for
              businesses. Let’s create something amazing together!
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg shadow-md font-semibold hover:bg-yellow-600 hover:shadow-lg transition duration-300">
                Download CV
              </button>
              <a
                href="https://github.com/aashish0959"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-yellow-500 text-yellow-500 py-3 px-8 rounded-lg shadow-md font-semibold hover:bg-yellow-600 hover:text-gray-900 hover:shadow-lg transition duration-300">
                  View My Work
                </button>
              </a>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="mb-10 md:mb-0">
            <img
              src="img2.jpg" // replace with your image URL
              alt="Aashish Kumar"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </header>

      {/* About, Skills, Projects, Contact, Footer Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

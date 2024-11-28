import React from "react";

export default function About() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide">
            About Me
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Hello! I'm{" "}
            <span className="text-yellow-400 font-semibold">Ashish</span>, a
            passionate front-end developer with a keen interest in creating
            interactive, user-friendly websites. Currently, I'm diving into the
            world of{" "}
            <span className="text-blue-400 font-semibold">
              full-stack development
            </span>
            , honing my skills, and working on innovative projects to make a
            meaningful impact in the tech industry.
          </p>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-16">
          {/* Image */}
          <div className="flex justify-center lg:w-1/3">
            <img
              src="/img2.jpg" // replace with your image path
              alt="Ashish Kumar"
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-2/3">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 mt-5 text-yellow-300">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I started my journey in web development with a passion for
              building visually stunning and highly functional user interfaces.
              Through consistent learning and experimentation, I've grown to
              love solving complex problems and bringing creative ideas to life
              through code. I'm excited to continue evolving as a developer and
              contributing to impactful projects.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Let's collaborate and create something amazing together!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

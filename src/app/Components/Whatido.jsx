import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiAdobephotoshop,
  SiCoreldraw,
} from "react-icons/si";

const WhatIDo = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        What I Do
      </h2>
      <p className="text-gray-600 mt-2">
        FULL STACK MERN DEVELOPER | EXPLORING MODERN TECHNOLOGIES | GRAPHIC
        DESIGN ENTHUSIAST
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side - Illustration */}
        <div className="flex justify-center md:w-1/2">
          <img src="/whatido.gif" alt="Developer" className="w-80 md:w-96" />
        </div>

        {/* Right Side - Skills */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900">
            Full Stack Development & Graphic Design
          </h3>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
            <div className="bg-white shadow-md p-4 rounded-full text-green-600 text-4xl">
              <SiMongodb />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-gray-800 text-4xl">
              <SiExpress />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-blue-600 text-4xl">
              <FaReact />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-green-700 text-4xl">
              <FaNodeJs />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-sky-500 text-4xl">
              <SiTailwindcss />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-purple-600 text-4xl">
              <SiBootstrap />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-black text-4xl">
              <FaGithub />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-yellow-500 text-4xl">
              <FaAws />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-orange-500 text-4xl">
              <FaHtml5 />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-blue-500 text-4xl">
              <FaCss3Alt />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-yellow-400 text-4xl">
              <FaJsSquare />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-blue-700 text-4xl">
              <SiAdobephotoshop />
            </div>
            <div className="bg-white shadow-md p-4 rounded-full text-pink-600 text-4xl">
              <SiCoreldraw />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700">
            <p className="flex items-center">
              ⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js
            </p>
            <p className="flex items-center mt-2">
              ⚡ Developing RESTful APIs and backend with Node.js & Express.js
            </p>
            <p className="flex items-center mt-2">
              ⚡ Styling with Tailwind CSS and Bootstrap
            </p>
            <p className="flex items-center mt-2">
              ⚡ Hosting and deploying projects on AWS and GitHub
            </p>
            <p className="flex items-center mt-2">
              ⚡ Designing graphics, logos, and banners using Photoshop and
              CorelDRAW
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

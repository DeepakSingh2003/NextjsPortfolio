import {
  FaPython,
  FaJs,
  FaReact,
  FaAws,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiHeroku } from "react-icons/si";

const WhatIDo = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        What I do
      </h2>
      <p className="text-gray-600 mt-2">
        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side - Illustration */}
        <div className="flex justify-center md:w-1/2">
          {/* Replace with actual image */}
          <img src="/whatido.gif" alt="Developer" className="w-80 md:w-96" />
        </div>

        {/* Right Side - Skills */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900">
            Full Stack Development
          </h3>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
            {[
              { icon: <FaPython />, name: "Python" },
              { icon: <SiDjango />, name: "Django" },
              { icon: <FaJs />, name: "JavaScript" },
              { icon: <FaReact />, name: "React.js" },
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <FaAws />, name: "AWS" },
              { icon: <SiHeroku />, name: "Heroku" },
              { icon: <FaGithub />, name: "GitHub" },
              { icon: <FaDocker />, name: "Docker" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md p-4 rounded-full"
              >
                <span className="text-3xl text-blue-600">{tech.icon}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700">
            <p className="flex items-center">
              ⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js
            </p>
            <p className="flex items-center mt-2">
              ⚡ Building responsive static websites using Next.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

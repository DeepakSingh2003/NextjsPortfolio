import React from "react";
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "A portfolio built using Next.js and Tailwind CSS to showcase skills and projects.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    name: "Codeware IT website",
    description: "A business website built with Next.js and Tailwind CSS.",
    github: "https://github.com/yourusername/sai-associates",
    demo: "https://saiassociates.com",
  },
  {
    name: "Music Web Application",
    description:
      "A music streaming app developed using React and Tailwind CSS.",
    github: "https://github.com/yourusername/music-app",
    demo: "https://yourmusicapp.com",
  },
  {
    name: "E-commerce Platform",
    description:
      "A full-stack MERN e-commerce platform with payment integration.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://yourecommerce.com",
  },
  {
    name: "Chat Web Application",
    description:
      "A real-time chat application similar to WhatsApp, built with MERN stack.",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://yourchatapp.com",
  },
];

const Projects = () => {
  return (
    <div className="p-10 rounded-lg shadow-lg mt-[2rem]" id="projects">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-4 rounded-full shadow-md">
          <FaLaptopCode className="text-cyan-500 text-4xl" />
        </div>
        <h2 className=" text-3xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full border-[1px] border-[#1963FC]"
          >
            <h3 className="text-cyan-500 text-xl font-semibold">
              {project.name}
            </h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="mt-4 flex space-x-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black text-white px-3 py-2 text-sm font-semibold rounded shadow-md hover:bg-gray-800 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 text-white px-3 py-2 text-sm font-semibold rounded shadow-md hover:bg-green-600 transition"
              >
                <FaExternalLinkAlt className="mr-2" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

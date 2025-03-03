import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-r from-blue-400 to-blue-600 p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start"
      id="contact"
    >
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-white text-4xl font-bold">Reach Out to Me!</h2>
        <p className="text-white mt-4">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
        </p>
        <p className="text-white mt-2 font-semibold">
          Full Stack Developer | MERN Stack | Tailwind CSS | Next.js | Photoshop
          | CorelDRAW
        </p>

        <div className="mt-6 bg-white p-3 rounded-lg flex items-center space-x-2 w-max shadow-md">
          <FaMapMarkerAlt className="text-blue-500 text-xl" />
          <span className="text-gray-700 font-medium">
            Dehradun, Uttarakhand
          </span>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href="mailto:your-email@example.com"
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <FaEnvelope className="text-blue-500 text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="bg-blue-500 p-3 rounded-full shadow-md hover:bg-blue-600"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            className="bg-black p-3 rounded-full shadow-md hover:bg-gray-900"
          >
            <FaGithub className="text-white text-xl" />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src="/Deepak.jpg"
            alt="Deepak Singh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section
      className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left  text-white px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(35deg, #11cdef, #1171ef)" }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-opacity-10 backdrop-blur-lg z-20">
        <h2 className="text-2xl font-bold">Deepak's Portfolio</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0F172A] text-white flex flex-col items-center space-y-6 py-6 z-10 md:hidden">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
      {/* Content */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-6xl font-extrabold mb-4">Hi all, I'm Deepak</h1>
        <p className="text-lg max-w-2xl mb-6 leading-relaxed">
          I'm a passionate Full Stack Web Developer with experience in React.js,
          JavaScript, and MERN Stack. I love learning new technologies and
          building creative, user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-6">
          <a
            href="mailto:deepaksinghchauhan914@gmail.com"
            className="bg-white p-3 rounded-full text-blue-600 hover:bg-gray-200 transition-all"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-singh-b2b080267"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full text-blue-600 hover:bg-gray-200 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Deepaksingh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full text-blue-600 hover:bg-gray-200 transition-all"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1USr18VJvcDH5_mohoQYc59OM6OeJgsjC/view?usp=sharing"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all"
        >
          See My Resume
        </a>
      </div>

      {/* GIF Animation in Circle (Hidden on Small Screens) */}
      <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-10 md:mt-0">
        <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white shadow-lg flex justify-center items-center">
          <Image
            src="/giphy.gif"
            alt="Developer Animation"
            width={288}
            height={288}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

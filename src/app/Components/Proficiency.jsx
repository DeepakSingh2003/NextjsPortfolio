"use client";
import { motion } from "framer-motion";

const Proficiency = () => {
  const skills = [
    { name: "FRONTEND/DESIGN", percentage: 85 },
    { name: "BACKEND", percentage: 90 },
    { name: "PROGRAMMING", percentage: 95 },
  ];

  return (
    <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center">
      {/* Left Side - Skills */}
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Proficiency
        </h2>
        <div className="mt-6 space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="text-md font-semibold text-gray-800">
                {skill.name}
              </p>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-1 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-2 bg-blue-400 rounded-full"
                ></motion.div>
                <span className="absolute right-[-40px] top-[-24px] text-gray-500 text-sm sm:right-0">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="/prof.gif"
          alt="Coding Illustration"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
};

export default Proficiency;

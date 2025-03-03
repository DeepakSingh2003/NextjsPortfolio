import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-10 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-4 rounded-full shadow-md">
          <FaGraduationCap className="text-blue-500 text-4xl" />
        </div>
        <h2 className="text-white text-3xl font-bold">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
          <h3 className="text-blue-500 text-xl font-semibold">
            SGRRU Dehradun, Uttarakhand
          </h3>
          <p className="text-gray-700">Master of Computer Applications (MCA)</p>
          <p className="text-gray-600 bg-blue-100 px-2 py-1 inline-block rounded mt-2">
            Duration: 2022 - 2024
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
          <h3 className="text-blue-500 text-xl font-semibold">
            SGRRU Dehradun, Uttarakhand
          </h3>
          <p className="text-gray-700">
            Bachelor of Science in Information Technology (BSc IT)
          </p>
          <p className="text-gray-600 bg-blue-100 px-2 py-1 inline-block rounded mt-2">
            Duration: 2019 - 2022
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
          <h3 className="text-blue-500 text-xl font-semibold">
            GIC Thati Budhakedar, Tehri Garhwal
          </h3>
          <p className="text-gray-700">Secondary (10th)</p>
          <p className="text-gray-600 bg-blue-100 px-2 py-1 inline-block rounded mt-2">
            Duration: 2016 - 2017
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
          <h3 className="text-blue-500 text-xl font-semibold">
            GIC Hindolakhal, Tehri Garhwal
          </h3>
          <p className="text-gray-700">Higher Secondary (12th)</p>
          <p className="text-gray-600 bg-blue-100 px-2 py-1 inline-block rounded mt-2">
            Duration: 2017 - 2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;

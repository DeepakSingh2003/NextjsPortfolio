const experiences = [
  {
    company: "Codeware IT",
    role: "Full Stack Developer (MERN Stack)",
    duration: "Aug 2023 - Present",
    description:
      "At Codeware IT, I am responsible for developing and maintaining full-stack applications using the MERN stack (MongoDB, Express.js, React, and Node.js). My role includes designing RESTful APIs, implementing user authentication, optimizing database queries, and integrating third-party services. I work closely with frontend and backend teams to build scalable and efficient applications that meet business requirements.",
  },
  {
    company: "VerveGen Tech Pvt Ltd",
    role: "Web Development Certification",
    duration: "Completed - 6 Months Course",
    description:
      "I successfully completed a 6-month certification course in web development from VerveGen Tech Pvt Ltd. The program covered frontend and backend technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. It provided hands-on experience in building responsive web applications, working with databases, and developing full-stack projects.",
  },
];

export default function Experience() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center flex items-center justify-center">
          <span className="mr-3 text-5xl">💼</span> Experience
        </h2>
        <div className="relative border-l-4 border-blue-500 ml-4 md:ml-10">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-6 md:ml-12 relative">
              <div className="absolute -left-3.5 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <div className="bg-white p-6 shadow-lg rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-gray-600 font-medium">{exp.role}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

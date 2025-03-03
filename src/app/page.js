import React from "react";
import Herosection from "./Components/Herosection";
import WhatIDo from "./Components/Whatido";
import Proficiency from "./Components/Proficiency";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function page() {
  return (
    <>
      <Herosection />
      <WhatIDo />
      <Proficiency />
      <Education />
      <Projects />
      <Footer />
    </>
  );
}

export default page;

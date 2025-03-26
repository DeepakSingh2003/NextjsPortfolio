import React from "react";
import Herosection from "./Components/Herosection";
import WhatIDo from "./Components/Whatido";
import Proficiency from "./Components/Proficiency";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Experience from "./Components/Expericence";
import TawkToWidget from "./Components/TawkToWidget";

function page() {
  return (
    <>
      <Herosection />
      <WhatIDo />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <Footer />
      <TawkToWidget />
    </>
  );
}

export default page;

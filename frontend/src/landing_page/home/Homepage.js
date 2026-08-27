import React from "react";
import WhyME from "./whyme.js";
import Homehero from "./hero.js";
import Courses from "./courses.js";
import Blog from "./blog.js";
import Benefits from "./benefits.js";
import OurStud from "./ourStudent.js";
import HomeFB from "./homefb.js";

function Homepage() {
  return (
    <>
      <Homehero />
      <Courses />
      <Benefits />
      <Blog />
      <WhyME />
      <OurStud/>
      <HomeFB/>
    </>
  );
}

export default Homepage;
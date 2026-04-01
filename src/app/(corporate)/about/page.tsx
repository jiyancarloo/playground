import React from "react";

import Hero from "../../sections/aboutSection/Hero";
import AboutUs from "../../sections/aboutSection/AboutUs";
import CoreValues from "../../sections/aboutSection/CoreValues";

function page() {
  return (
    <>
      <div className="">
        <Hero />
        <AboutUs />
        <CoreValues />
      </div>
    </>
  );
}

export default page;

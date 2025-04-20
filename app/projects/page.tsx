import React, { useState } from "react";
import Projects from "../components/Projects";

const page = () => {
    
  return (
    <section className="max-container">
      <h1 className="head-text">
      My {" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
           Projects
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          Here are some of my projects that I have worked on. You can check them
          out on my GitHub profile. I am always looking for new projects to work
          on, so if you have any ideas or suggestions, feel free to reach out to
          me.
        </p>
      </div>

      <Projects/>

    </section>
  );
};

export default page;

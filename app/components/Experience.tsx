"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import newGen from "../assets/experiences/NewGen.jpeg";
import Image from "next/image";
import { useState } from "react";

const HtmlImg = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image
        src={newGen}
        alt="HTML"
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  );
};
const Experience = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "New Generation Publishing and Distribution House",
      jobRole: "Frontend Developer",
      history: " May 2024- June 2024",
      country: "Cairo, Egypt",
      icon: HtmlImg,
      roles: [
        " Developed interactive UI components for the company’s educational platform, improving user engagement.",
        " Refactored and optimized existing codebase, enhancing performance and reducing load times by 20",
      ],
      iconBg: "blue",
    },
  ]);

  return (
    <section className="py-10 flex flex-col">
      <h3 className="subhead-text">My Experience</h3>

      <div className="text-slate-500 mt-5 flex flex-col gap-5">
        <p>
          I've collaborated with diverse companies and teams, continuously
          sharpening my skills and gaining hands-on experience across various
          projects. Working alongside talented professionals has allowed me to
          grow both technically and creatively, contributing to high-quality
          solutions and impactful digital products.
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experience.map((exper) => (
            <VerticalTimelineElement
              key={exper?.id}
              className="vertical-timeline-element--work"
              date={exper?.history}
              iconStyle={{
                background: "#fff",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={<HtmlImg />}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: exper?.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {exper?.jobRole}
                </h3>

                <p
                  className="text-black-500 font-medium text-base"
                  style={{ margin: 0 }}
                >
                  {exper?.company}, {exper?.country}
                </p>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exper?.roles?.map((role, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {role}
                    </li>
                  ))}

                  <li></li>
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

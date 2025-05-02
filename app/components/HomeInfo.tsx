import Link from "next/link";
import Image from "next/image"; // Use next/image for optimized images
import React from "react";
import arrow from "../assets/icons/arrow.svg"; // Ensure the path is correct and points to the actual file

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Khaled hamdy</span>
        👋
        <br />A Software Engineer from Egypt (Full Stack Developer)
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Passionate Full Stack Developer <br /> and Computer Science student.
        </p>

        <Link href="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Contributed to multiple successful projects. <br /> Excited to see the
          impact? 🚀
        </p>

        <Link href="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link href="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;

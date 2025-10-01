import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto">
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
          My <span className="text-cyan-200">Education & Experience</span>
        </h1>

        {/* Education Cards */}
        <div data-aos='zoom-out' data-aos-anchor-placement='top-center' className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ResumeCard
            Icon={BiBadge}
            role="B.Tech in Computer Science"
            date="July 2023 - July 2027"
            description="Pursuing my Bachelor's degree focusing on software development, algorithms, and web technologies."
          />
          <ResumeCard
            Icon={FaReact}
            role="React & Frontend Skills"
            date="2023 - Present"
            description="Learning and building projects using React, TailwindCSS, and other modern frontend tools."
          />
          <ResumeCard
            Icon={BsDatabase}
            role="Database & Backend Knowledge"
            date="2023 - Present"
            description="Hands-on experience with SQL, NoSQL, and basic backend integrations."
          />
          <ResumeCard
            Icon={FaCodepen}
            role="Project Experience"
            date="2023 - Present"
            description="Developing personal and portfolio projects to demonstrate skills and creativity."
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;

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
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <ResumeCard
            Icon={BiBadge}
            role="B.Tech in Computer Science (Specialization in Data Science)"
            date="July 2023 – July 2027"
            description="Pursuing Bachelor's degree at J.C. Bose University of Science and Technology, YMCA. Coursework includes Data Science, Machine Learning, Artificial Intelligence, Algorithms, and Database Systems."
          />
          <ResumeCard
            Icon={FaReact}
            role="Research Paper – Video Summarization Techniques"
            date="Sept 2025 – Ongoing"
            description="Conducting a literature review on supervised and unsupervised methods for video summarization, analyzing deep learning approaches and keyframe extraction techniques."
          />
          <ResumeCard
            Icon={BsDatabase}
            role="Dynamic Route Finder – DSA Project"
            date="Sept 2025 – Present"
            description="Implemented shortest path algorithms (Dijkstra’s and A*) for route optimization with graph visualization and performance comparison on large datasets."
          />
          <ResumeCard
            Icon={FaCodepen}
            role="CoursePulse – Learning Platform (MERN Stack)"
            date="April 2025 – July 2025"
            description="Developed a full-stack web app for course management using MongoDB, Express.js, React.js, and Node.js. Implemented REST APIs and user authentication."
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;

import { GithubIcon, Link } from "lucide-react";
import React from "react";
import LoadingThreeDotsJumping from "./LoadingThreeDotsJumping.tsx";
import {
  MAX_TAGS_DISPLAY,
  projects,
  tagIcons,
  type Project,
} from "../data/ProjectData.tsx";



const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const displayTags = project.tags.slice(0, MAX_TAGS_DISPLAY);
  const hasMoreTags = project.tags.length > MAX_TAGS_DISPLAY;
  const extraTagsCount = project.tags.length - MAX_TAGS_DISPLAY;
  return (
    <div className="bg-[#1e1e1e] rounded-4xl overflow-hidden shadow-md relative group hover:opacity-70 border border-gray-800 transition-all duration-300">
      <div className="relative h-80 overflow-hidden">
        {/* Background image with hover effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-black transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          style={{
            backgroundImage: `url(${
              project.coverImage || "/cybersecurity-default.jpg"
            })`,
          }}
        ></div>

        {/*overlay to enhance the effect */}
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>

        {/* Status badges */}
        <div className="absolute top-2 left-2 bg-black opacity-50 text-white text-xs px-3 py-1 rounded-full">
          {project.year || "Year"}
        </div>
        <div className="absolute top-2 right-3 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span
            className={`h-3 w-3 rounded-full ${
              project.status === "completed"
                ? "bg-blue-500"
                : project.status === "live"
                ? "bg-green-500"
                : "bg-yellow-400"
            }`}
          ></span>
          {project.status || "Status"}
        </div>

        {/* Hover label */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
          <span className="text-black text-sm bg-white px-4 py-2 rounded-full backdrop-blur-md">
            {project.hoverLabel || "Security Project"}
          </span>
        </div>
      </div>

      <div className="p-5 relative">
        <h3 className="text-xl font-semibold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 border border-gray-500 text-white text-xs px-3 py-1 rounded-full flex items-center"
            >
              {tagIcons[tag] ? (
                <span className="mr-1.5">{tagIcons[tag]}</span>
              ) : null}
              {tag}
            </span>
          ))}
          {hasMoreTags && (
            <span className="bg-gray-600 border border-gray-400 text-white text-xs px-3 py-1 rounded-full flex items-center">
              +{extraTagsCount}
            </span>
          )}
        </div>

        <div className="flex w-full justify-evenly gap-4 transition-all duration-300 opacity-100 md:absolute md:bottom-4 md:left-4 md:right-4 md:px-1 md:hidden group-hover:opacity-100 group-hover:md:flex">
          {project.codeLink && (
            <div className="border border-blue-800 w-full rounded-full p-0.5 h-[42px]">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (project.codeLink === "#") {
                    e.preventDefault();
                  }
                }}
                className={`text-white text-xs sm:text-sm flex items-center justify-center h-full ${
                  project.codeLink === "#"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700"
                } px-3 sm:px-4 rounded-full w-full border border-white whitespace-nowrap`}
              >
                <GithubIcon className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>
                  {project.codeLink === "#" ? "Report" : "View Details"}
                </span>
              </a>
            </div>
          )}
          {project.liveLink && (
            <div className="border border-green-800 w-full rounded-full p-0.5 h-[42px]">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  if (project.liveLink === "#") {
                    e.preventDefault();
                  }
                }}
                className={`text-white text-xs sm:text-sm flex items-center justify-center h-full ${
                  project.liveLink === "#"
                    ? "bg-blue-600 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } px-3 sm:px-4 rounded-full w-full border border-white whitespace-nowrap`}
              >
                <Link className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>{project.liveLink === "#" ? "Soon" : "View Live"}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section
    id="projects"
    className="p-4 lg:px-34 bg-black min-h-screen flex flex-col items-center justify-center"
  >
    <h2 className="text-3xl md:text-4xl flex font-bold text-white mb-2">
      Security Projects
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl text-center mb-2">
      A showcase of my cybersecurity work, demonstrating vulnerability
      assessment, penetration testing, and security implementation across
      various platforms.
    </p>
    <p className="mb-1 text-gray-500 text-xs">
      Note: Many projects are under NDA and cannot be displayed here. Details
      have been modified to protect client confidentiality.
    </p>
    <div className="px-16 h-px bg-gradient-to-r from-gray-900 via-blue-500 to-gray-900 my-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-16">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} />
      ))}
    </div>
    {/* Evolving section */}
    <div className="mt-8 text-center">
      <p className="text-blue-400 font-mono text-sm sm:text-lg mb-6">
        This section is evolving...
        <span className="inline-block w-2 h-5 ml-1 bg-blue-500 animate-blink"></span>
      </p>

      <div className="my-4">
        <LoadingThreeDotsJumping />
      </div>
      <div className="mt-3 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-gray-600 ">More security research</p>
        <p className="text-gray-600 sm:pl-2">coming soon</p>
      </div>
    </div>
  </section>
);

export default Projects;

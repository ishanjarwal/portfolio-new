"use client";
// use mockup png for images
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/constants/constants";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbLivePhoto } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { register } from "swiper/element/bundle";
import Link from "next/link";
register();

const Projects = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  // useEffect(() => {
  //     if (data) {
  //         document.body.style.overflow = "hidden";
  //     } else {
  //         document.body.style.overflow = "auto";
  //     }
  // }, [data]);

  const swiper_options = {
    "slides-per-view": 1,
    loop: 1,
    "autoplay-delay": 2000,
    speed: 500,
  };

  return (
    <div id="project_section">
      {data && <ProjectModal data={data} setData={setData} />}
      <h1 className="text-4xl font-bold text-text dark:text-white">
        🚀Projects
      </h1>
      <p className="text-text-muted dark:text-dark-text-muted mt-2">
        A showcase of my diverse projects, highlighting my skills in web
        development, UI Designing, and creative problem-solving.
      </p>
      <div className="mt-8">
        {projects.map((item, idx) => (
          <div className="xl:p-8 p-4 mt-8 flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-4 bg-background dark:bg-dark-background rounded-xl">
            <div className="relative cursor-pointer lg:w-[40%] aspect-square mx-auto max-w-72">
              <swiper-container {...swiper_options}>
                <swiper-slide>
                  <div className="flex items-center justify-center">
                    <img
                      src={`projects/${item.thumbnails[0]}`}
                      className="w-full h-full object-contain object-center  duration-300"
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div className="flex items-center justify-center">
                    <img
                      src={`projects/${item.thumbnails[1]}`}
                      className="w-full h-full object-contain object-center duration-300"
                    />
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <div className="flex-1 pt-8">
              <h1 className="text-text dark:text-dark-text text-3xl">
                {item.title}
              </h1>
              <p className="text-text-muted dark:text-dark-text-muted mt-4">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap">
                {item.technologies.map((technology, idx) => (
                  <span className="mb-2 me-2 py-1 px-2 rounded-md border border-pri dark:text-pri text-black text-sm ">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-start md:space-x-2 md:flex-row flex-col md:space-y-0 space-y-2">
                <button
                  onClick={() => {
                    setData(item);
                  }}
                  className="py-2 px-6 text-black bg-white dark:bg-black hover:bg-pri hover:text-black dark:hover:bg-pri dark:hover:text-black duration-150 dark:text-white border-2 border-border dark:border-dark-border  rounded-lg flex justify-center items-center space-x-2"
                >
                  <span className=" text-lg">
                    <IoBriefcaseOutline />
                  </span>
                  <span>Case Study</span>
                </button>
                {item.live && (
                  <a
                    target="_blank"
                    href={item.live}
                    className="py-2 px-6 text-black bg-white dark:bg-black hover:bg-pri hover:text-black dark:hover:bg-pri dark:hover:text-black duration-150 dark:text-white border-2 border-border dark:border-dark-border rounded-lg flex justify-center items-center space-x-2"
                  >
                    <span className="text-red-500 text-lg">
                      <TbLivePhoto />
                    </span>
                    <span>View Live</span>
                  </a>
                )}
                {item.github && (
                  <a
                    target="_blank"
                    href={item.github}
                    className="py-2 px-6 text-black bg-white dark:bg-black hover:bg-pri hover:text-black dark:hover:bg-pri dark:hover:text-black duration-150 dark:text-white border-2 border-border dark:border-dark-border rounded-lg flex justify-center items-center space-x-2"
                  >
                    <span className="text-lg">
                      <FaGithub />
                    </span>
                    <span>Github</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

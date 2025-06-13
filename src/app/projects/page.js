import React from "react";
import ProjectPageContent from "./pageContent";

export const metadata = {
  title: "Projects | Ishan Jarwal",
  description:
    "Explore featured full stack projects by Ishan Jarwal, showcasing skills in TypeScript, NextJS, React, ExpressJS, Node.js, and more.",
};

const Projects = () => {
  return (
    <div id="project_section">
      <ProjectPageContent />
    </div>
  );
};

export default Projects;

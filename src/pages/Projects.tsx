import React from 'react';
import ProjectList from '../components/projects/ProjectList';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <p className="text-[#CCCCCC] mb-8 max-w-3xl">
        Below you'll find a selection of projects I've worked on. Each project showcases different skills and technologies.
        Use the search and filter options to find specific projects.
      </p>
      
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
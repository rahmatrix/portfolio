import React from 'react';
import { Project } from '../../types';
import { Github, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-sidebar rounded-lg overflow-hidden h-full flex flex-col shadow-lg border border-main">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-0 right-0 bg-accent text-white px-2 py-1 text-xs flex items-center">
            <Star size={12} className="mr-1" />
            <span>Featured</span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-main mb-2">{project.title}</h3>
        
        <p className="text-main text-sm mb-4 flex-grow opacity-80">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-header text-accent text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-main border-opacity-50">
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-main hover:text-accent text-sm transition-colors"
            >
              <Github size={16} className="mr-1" />
              <span>Code</span>
            </a>
          )}
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-main hover:text-accent text-sm transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
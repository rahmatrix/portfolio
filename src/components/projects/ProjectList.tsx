import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';
import { Search, Filter } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');
  
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTech = selectedTech === '' || project.technologies.includes(selectedTech);
    
    return matchesSearch && matchesTech;
  });
  
  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-main opacity-50" />
          <input 
            type="text" 
            placeholder="Search project by title or description..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-header text-main border border-main rounded-lg py-2 pl-12 pr-4 focus:outline-none focus:border-accent"
          />
        </div>
        
        <div className="relative">
          <Filter size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-main opacity-50" />
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full md:w-auto bg-header text-main border border-main rounded-lg py-2 pl-12 pr-10 appearance-none focus:outline-none focus:border-accent"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-main opacity-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5H7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 text-main opacity-70">
          <p className="text-lg">No projects found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
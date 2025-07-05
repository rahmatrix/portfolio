import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, FileCode, Github, Linkedin } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (codeRef.current) {
      const text = `function Developer() {
  const [skills, setSkills] = useState([
    'React', 'TypeScript', 'Node.js',
    'CSS', 'UI/UX', 'Responsive Design'
  ]);
  
  return (
    <div className="developer">
      <h1>Hello, I'm a Full-Stack Developer</h1>
      <p>Passionate about creating amazing web experiences</p>
      {skills.map(skill => (
        <Skill key={skill} name={skill} />
      ))}
    </div>
  );
}`;
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length && codeRef.current) {
          codeRef.current.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 20 + 10);
        }
      };
      
      typeWriter();
    }
  }, []);
  
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col lg:flex-row items-center gap-8 px-4 py-8">
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex items-center text-accent">
          <Code size={24} className="mr-2" />
          <h2 className="text-xl font-mono">Portfolio.rahmatrix</h2>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          I'm <span className="text-accent">Rahma Rohmatinisa</span>,<br />
          Web Developer
        </h1>
        
        <p className="text-lg">
          Crafting beautiful, responsive, and user-friendly web applications 
          with modern technologies and best practices.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link to="/projects">
            <Button variant="primary" className="group">
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/about">
            <Button variant="secondary">
              About Me
            </Button>
          </Link>
        </div>
        
        <div className="flex gap-4 pt-4">
          <a 
            href="https://github.com/rahmatrix/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-main hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-main hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="bg-sidebar px-4 py-2 flex items-center border-b border-main">
            <FileCode size={16} className="mr-2" />
            <span className="text-sm">Developer.jsx</span>
          </div>
          
          <div 
            ref={codeRef}
            className="p-4 font-mono text-sm whitespace-pre overflow-x-auto"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
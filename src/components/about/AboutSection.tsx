import React from 'react';
import { Code, Server, Database, Wrench, Briefcase, GraduationCap, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-main mb-6">About Me</h2>
        
        <div className="bg-sidebar border border-main rounded-lg p-6">
          <p className="text-main mb-4">
          Hi! I'm Rahma Rohmatinisa, a tech enthusiast and junior developer who recently graduated from SMK Negeri 1 Ciamis, majoring in Software Engineering (RPL) in 2025. Since high school, I've been passionate about technology and programming—especially in creating digital solutions that are both useful and user-friendly. Through my studies and hands-on experiences, including an internship at BNNK Ciamis, I've gained a solid foundation in both frontend and backend development processes.
          </p>
          
          <p className="text-main mb-4">
          I enjoy crafting intuitive and responsive user interfaces as much as I do designing clean, efficient backend systems. I believe technology should improve everyday life, and I strive to contribute to that mission by building modern web applications. On the frontend, I work with HTML, CSS, JavaScript, TypeScript, and React, while on the backend I use PHP, Laravel, and Python. I'm also comfortable working with MySQL/MariaDB databases and development tools like Git, GitHub, and Electron.js.
          </p>
          
          <p className="text-main">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the mountains.
          I'm always eager to learn new things and take on challenging projects that push my skills to the next level.
          </p>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-main mb-6">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Code size={24} className="text-accent mr-3" />
              <h3 className="text-xl font-semibold text-main">Frontend</h3>
            </div>
            <ul className="space-y-2 text-main">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• TypeScript</li>
              <li>• React</li>
              <li>• Tailwind CSS</li>
              <li>• Bootstrap</li>
            </ul>
          </div>
          
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Server size={24} className="text-accent mr-3" />
              <h3 className="text-xl font-semibold text-main">Backend</h3>
            </div>
            <ul className="space-y-2 text-main">
              <li>• PHP</li>
              <li>• Laravel</li>
              <li>• Node.js</li>
              <li>• Java</li>
              <li>• Python</li>
            </ul>
          </div>
          
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Database size={24} className="text-accent mr-3" />
              <h3 className="text-xl font-semibold text-main">Databases</h3>
            </div>
            <ul className="space-y-2 text-main">
              <li>• MySQL</li>
              <li>• MariaDB</li>
            </ul>
          </div>
          
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Wrench size={24} className="text-accent mr-3" />
              <h3 className="text-xl font-semibold text-main">Tools & Others</h3>
            </div>
            <ul className="space-y-2 text-main">
              <li>• Git</li>
              <li>• GitHub</li>
              <li>• Electron.js</li>
              <li>• Responsive Design</li>
              <li>• Figma</li>
              <li>• Adobe Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-main mb-6">Experience</h2>
        
        <div className="space-y-6">
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <Briefcase size={24} className="text-accent mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-main">Internship at BNNK Ciamis</h3>
                  <p className="text-main">4 months Internship / PKL</p>
                </div>
              </div>
              <span className="text-main text-sm">2024 - 2025</span>
            </div>
            <p className="text-main mb-3">
              Completed a 4-month professional internship as part of the Software Engineering program at SMK Negeri 1 Ciamis. 
              Assisted in IT operations and administrative systems to improve institutional workflows.
            </p>
            <ul className="text-main space-y-2">
              <li>• Developed and maintained internal systems supporting day-to-day IT tasks and troubleshooting</li>
              <li>• Created a Laravel-based archival system for efficient document management</li>
              <li>• Built a digital guestbook application using Laravel to modernize visitor registration and tracking</li>
              <li>• Collaborated closely with staff to ensure system usability and documentation</li>
            </ul>
          </div>
          
          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <Award size={24} className="text-accent mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-main">Competency Test Project</h3>
                  <p className="text-main">SMK Negeri 1 Ciamis</p>
                </div>
              </div>
              <span className="text-main text-sm">2025</span>
            </div>
            <p className="text-main">
              Successfully completed a competency test by developing a comprehensive Laravel-based PLN payment system project. 
              This project involved full-stack development covering database design, backend logic, and frontend UI/UX to simulate 
              real-world electricity billing and payment workflows.
            </p>
          </div>

          <div className="bg-sidebar border border-main rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <Users size={24} className="text-accent mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-main">Sekretaris 2, Korean Club Extracurricular</h3>
                  <p className="text-main">Leadership & Activities</p>
                </div>
              </div>
              <span className="text-main text-sm">2023 - 2024</span>
            </div>
            <p className="text-main">
              Served as the second secretary of the Korean Club, helping organize events, manage communications, 
              and support club activities aimed at promoting Korean language and culture among students.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-main mb-6">Education</h2>
        
        <div className="bg-sidebar border border-main rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start">
              <GraduationCap size={24} className="text-accent mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-main">Software Engineering (RPL)</h3>
                <p className="text-main">SMK Negeri 1 Ciamis</p>
              </div>
            </div>
            <span className="text-main text-sm">2025</span>
          </div>
          <p className="text-main">
            Graduated from vocational high school with a focus on Software Engineering (Rekayasa Perangkat Lunak).
            Gained comprehensive knowledge in software development, web technologies, and programming fundamentals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
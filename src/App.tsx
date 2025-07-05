import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Code, Terminal as TerminalIcon, Menu } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Terminal from './components/layout/Terminal';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificate from './pages/Certificate';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const toggleTerminal = () => {
    setIsTerminalOpen(prev => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const toggleExplorer = () => {
    setIsExplorerOpen(prev => !prev);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col h-screen bg-background text-main font-sans">
          <div className="bg-header h-10 flex items-center px-4 border-b border-main">
            <button
              onClick={toggleSidebar}
              className="md:hidden mr-2 hover:bg-sidebar p-1 rounded"
            >
              <Menu size={18} />
            </button>
            <div className="flex items-center">
              <Code size={18} className="mr-2" />
              <span className="text-sm">VS Portfolio</span>
            </div>
            
            <div className="flex-grow flex justify-center">
              <div className="hidden md:flex space-x-6 text-sm">
                <a href="#" className="hover:text-white">File</a>
                <a href="#" className="hover:text-white">Edit</a>
                <a href="#" className="hover:text-white">View</a>
                <a href="#" className="hover:text-white">Go</a>
                <a href="#" className="hover:text-white">Run</a>
                <a href="#" className="hover:text-white">Terminal</a>
                <a href="#" className="hover:text-white">Help</a>
              </div>
            </div>
          </div>
          
          <div className="flex-grow flex overflow-hidden">
            <Sidebar
              isMobileOpen={isSidebarOpen}
              onMobileClose={() => setIsSidebarOpen(false)}
              isExplorerOpen={isExplorerOpen}
              onToggleExplorer={toggleExplorer}
            />
            
            <div className="flex-grow flex flex-col overflow-hidden">
              <Header />
              
              <div className="flex-grow overflow-auto">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certificates" element={<Certificate />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
              
              <button 
                onClick={toggleTerminal}
                className={`fixed bottom-6 right-6 p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent-hover transition-all ${isTerminalOpen ? 'opacity-50' : 'opacity-100'}`}
              >
                <TerminalIcon size={24} />
              </button>
              
              <Terminal isOpen={isTerminalOpen} onToggle={toggleTerminal} />
              
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
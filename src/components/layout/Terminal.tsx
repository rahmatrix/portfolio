import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Minimize2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface TerminalProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onToggle }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> Welcome to my portfolio terminal!',
    '> Type "help" for available commands.'
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    const newHistory = [...history, `$ ${input}`];
    
    // Process commands
    switch (input.toLowerCase().trim()) {
      case 'help':
        newHistory.push(
          '> Available commands:',
          '> help - Show this help message',
          '> about - About me',
          '> contact - Contact information',
          '> skills - List my skills',
          '> clear - Clear terminal'
        );
        break;
        
      case 'about':
        newHistory.push(
          '> Hi! I\'m a full-stack developer with a passion for creating',
          '> beautiful, functional web applications.',
          '> Check out the About page for more information!'
        );
        break;
        
      case 'contact':
        newHistory.push(
          '> Email: email@example.com',
          '> GitHub: github.com/username',
          '> LinkedIn: linkedin.com/in/username'
        );
        break;
        
      case 'skills':
        newHistory.push(
          '> Languages: JavaScript, TypeScript, Python, PHP',
          '> Frontend: React, Vue.js, Angular, HTML, CSS',
          '> Backend: Node.js, Express, Django, Laravel',
          '> Database: MongoDB, MySQL, PostgreSQL'
        );
        break;
        
      case 'clear':
        setHistory([]);
        setInput('');
        return;
        
      default:
        newHistory.push(`> Command not found: ${input}`);
    }
    
    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 h-80 z-50"
        >
          <div className="h-full bg-background border-t border-main flex flex-col">
            <div className="flex items-center justify-between bg-sidebar px-4 py-1 border-b border-main">
              <div className="flex items-center gap-4">
          <TerminalIcon size={14} className="mr-2 text-[#75BEFF]" />
                <span className="text-sm text-main">Terminal</span>
        </div>
              <div className="flex items-center">
          <button 
            onClick={onToggle} 
                  className="p-1 text-main hover:bg-header rounded"
                  title="Close Terminal"
          >
                  <X size={18} />
          </button>
        </div>
      </div>
      
      <div 
              ref={terminalBodyRef}
              className="flex-grow p-3 overflow-y-auto font-mono text-sm text-main bg-background"
      >
        {history.map((line, index) => (
                <div key={index} className={`mb-1 ${line.startsWith('$') ? 'text-main' : line.startsWith('>') ? 'text-blue-400' : ''}`}>
            {line}
          </div>
        ))}
              <div ref={endOfMessagesRef} />
              <form onSubmit={handleSubmit} className="flex items-center mt-2">
                <span className="text-main mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
                  className="flex-grow bg-transparent outline-none text-main font-mono"
                  placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>
    </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
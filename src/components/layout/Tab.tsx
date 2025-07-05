import React from 'react';
import { File, X } from 'lucide-react';
import { TabItem } from '../../types';

interface TabProps {
  tab: TabItem;
  onClose: (id: string) => void;
  onClick: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({ tab, onClose, onClick }) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose(tab.id);
  };

  const tabClasses = `
    flex items-center cursor-pointer px-4 py-2 border-r border-b
    ${tab.active 
      ? 'bg-background text-main border-b-transparent' 
      : 'bg-sidebar text-main opacity-70 border-main'
    }
    hover:bg-background hover:opacity-100 transition-colors
  `;

  return (
    <div 
      className={tabClasses}
      onClick={() => onClick(tab.id)}
    >
      <File size={16} className="mr-2 text-accent" />
      <span className="text-sm">{tab.label}</span>
      <button 
        onClick={handleClose}
        className="ml-4 p-0.5 rounded hover:bg-header"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Tab;
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Monitor, Moon, Heart } from 'lucide-react';
import Tab from './Tab';
import { TabItem } from '../../types';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const pathToLabel: Record<string, { label: string, icon: string }> = {
      '/': { label: 'Home.tsx', icon: 'home' },
      '/about': { label: 'About.tsx', icon: 'user' },
      '/projects': { label: 'Projects.tsx', icon: 'file-code' }
    };
    
    const currentPath = location.pathname;
    
    if (tabs.some(tab => tab.path === currentPath)) {
      setTabs(prev => prev.map(tab => ({
        ...tab,
        active: tab.path === currentPath
      })));
      return;
    }
    
    if (pathToLabel[currentPath]) {
      const newTab: TabItem = {
        id: currentPath,
        label: pathToLabel[currentPath].label,
        path: currentPath,
        icon: pathToLabel[currentPath].icon,
        active: true
      };
      
      setTabs(prev => [
        ...prev.map(tab => ({ ...tab, active: false })),
        newTab
      ]);
    }
  }, [location.pathname]);

  const handleTabClose = (id: string) => {
    const tabToClose = tabs.find(tab => tab.id === id);
    const isActive = tabToClose?.active;
    
    const newTabs = tabs.filter(tab => tab.id !== id);
    
    if (isActive && newTabs.length > 0) {
      const lastTab = newTabs[newTabs.length - 1];
      newTabs[newTabs.length - 1] = { ...lastTab, active: true };
      navigate(lastTab.path);
    }
    
    setTabs(newTabs);
    
    if (newTabs.length === 0) {
      navigate('/');
    }
  };

  const handleTabClick = (id: string) => {
    const clickedTab = tabs.find(tab => tab.id === id);
    if (clickedTab) {
      navigate(clickedTab.path);
    }
  };

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Monitor size={16} />;
      case 'dark':
        return <Moon size={16} />;
      case 'pink':
        return <Heart size={16} />;
    }
  };

  const nextTheme = () => {
    const themes: Array<'light' | 'dark' | 'pink'> = ['light', 'dark', 'pink'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="bg-header border-b border-main flex justify-between">
      <div className="flex overflow-x-auto">
        {tabs.map(tab => (
          <Tab 
            key={tab.id} 
            tab={tab} 
            onClose={handleTabClose} 
            onClick={handleTabClick} 
          />
        ))}
      </div>

      <div className="flex items-center px-4">
      <button
        onClick={nextTheme}
          className="px-4 hover:bg-sidebar text-main transition-colors"
        title="Toggle theme"
      >
        <ThemeIcon />
      </button>
      </div>
    </div>
  );
};

export default Header
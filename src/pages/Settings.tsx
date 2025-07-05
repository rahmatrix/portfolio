import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Theme } from '../types';
import { Sun, Moon, Sparkles } from 'lucide-react';

const themeOptions: { name: Theme; icon: React.ElementType }[] = [
  { name: 'light', icon: Sun },
  { name: 'dark', icon: Moon },
  { name: 'pink', icon: Sparkles },
];

const Settings: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-main mb-6">Settings</h1>
      
      <div className="bg-sidebar p-6 rounded-lg border border-main">
        <h2 className="text-lg font-semibold text-main mb-4">Theme</h2>
        <p className="text-main mb-6">Select your preferred color theme for the interface.</p>
        
        <div className="flex items-center space-x-4">
          {themeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.name}
                onClick={() => setTheme(option.name)}
                className={`
                  flex items-center justify-center w-24 h-24 rounded-lg
                  border-2 transition-all duration-200
                  ${
                    theme === option.name
                      ? 'border-accent scale-105'
                      : 'border-main hover:border-accent'
                  }
                `}
                title={`Switch to ${option.name} theme`}
              >
                <div className="flex flex-col items-center">
                  <Icon size={28} className={theme === option.name ? 'text-accent' : 'text-main'} />
                  <span className={`mt-2 text-sm font-medium ${theme === option.name ? 'text-accent' : 'text-main'}`}>
                    {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings; 
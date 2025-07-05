import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeColors = {
  dark: {
    bg: '#1E1E1E',
    sidebar: '#252526',
    header: '#3C3C3C',
    text: '#CCCCCC',
    accent: '#007ACC',
    border: '#3E3E42',
  },
  light: {
    bg: '#FFFFFF',
    sidebar: '#F3F3F3',
    header: '#E4E4E4',
    text: '#333333',
    accent: '#0078D4',
    border: '#D4D4D4',
  },
  pink: {
    bg: '#FFF0F7',
    sidebar: '#FFE3F1',
    header: '#FFD6EC',
    text: '#831843',
    accent: '#DB2777',
    border: '#FBCFE8',
  },
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = document.documentElement;
    const colors = themeColors[theme];

    root.style.setProperty('--bg-color', colors.bg);
    root.style.setProperty('--sidebar-color', colors.sidebar);
    root.style.setProperty('--header-color', colors.header);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--border-color', colors.border);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
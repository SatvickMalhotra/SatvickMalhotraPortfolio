import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { themes, type Theme } from '../themes';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  themeConfig: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper function to get a random theme, optionally excluding the current one
const getRandomTheme = (currentTheme?: string): string => {
  const themeKeys = Object.keys(themes);
  const availableThemes = currentTheme ? themeKeys.filter(key => key !== currentTheme) : themeKeys;
  const randomIndex = Math.floor(Math.random() * availableThemes.length);
  return availableThemes[randomIndex];
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with a random theme on page load/refresh
  const [theme, setThemeState] = useState(() => getRandomTheme());

  // Effect to apply theme colors to the root element whenever the theme changes
  useEffect(() => {
    const themeConfig = themes[theme] || themes.cyberpunk;
    const root = document.documentElement;
    
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  // Effect to change theme when tab becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setThemeState(currentTheme => getRandomTheme(currentTheme));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const setTheme = (newTheme: string) => {
      if (themes[newTheme]) {
          setThemeState(newTheme);
      }
  };

  const themeConfig = useMemo(() => themes[theme] || themes.cyberpunk, [theme]);

  const value = { theme, setTheme, themeConfig };

  return (
    <ThemeContext.Provider value={value}>
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
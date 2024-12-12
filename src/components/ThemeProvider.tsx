import { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultTheme } from "@/config/themes";
import { Theme } from "@/config/themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeName: string) => void;
  currentTheme: string;
  themeKey: string;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  currentTheme: 'classic',
  themeKey: 'classic',
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState('classic');
  const theme = themes.find((t) => t.name === currentTheme) || defaultTheme;

  useEffect(() => {
    // Load saved theme on initial mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes.some(t => t.name === savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    localStorage.setItem("theme", themeName);
    
    // Update CSS variables
    const root = document.documentElement;
    const selectedTheme = themes.find((t) => t.name === themeName) || defaultTheme;
    
    root.style.setProperty('--background', selectedTheme.colors.background);
    root.style.setProperty('--foreground', selectedTheme.colors.foreground);
    
    Object.entries(selectedTheme.colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(
            `--${key}${subKey === 'DEFAULT' ? '' : `-${subKey}`}`,
            subValue
          );
        });
      } else {
        root.style.setProperty(`--${key}`, value);
      }
    });

    // Update body background and text color
    document.body.style.backgroundColor = selectedTheme.colors.background;
    document.body.style.color = selectedTheme.colors.foreground;
  };

  // Apply theme whenever it changes
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      currentTheme, 
      themeKey: currentTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
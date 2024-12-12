import { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultTheme } from "@/config/theme/themes";
import { Theme, ThemeKey } from "@/config/theme/types";

type ThemeContextType = {
  theme: Theme;
  themeKey: ThemeKey;
  setTheme: (themeKey: ThemeKey) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  themeKey: 'classic',
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>('classic');
  const theme = themes[themeKey];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeKey | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeKey(savedTheme);
    }
  }, []);

  const setTheme = (newThemeKey: ThemeKey) => {
    setThemeKey(newThemeKey);
    localStorage.setItem("theme", newThemeKey);
    
    // Update CSS variables
    const root = document.documentElement;
    const newTheme = themes[newThemeKey];
    
    root.style.setProperty('--background', newTheme.background);
    root.style.setProperty('--foreground', newTheme.textColor);
    root.style.setProperty('--primary', newTheme.primary);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeKey, setTheme }}>
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
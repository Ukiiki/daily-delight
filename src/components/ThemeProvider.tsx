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

  // Apply theme colors whenever theme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeKey | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeKey(savedTheme);
    }
  }, []);

  // Update CSS variables and save theme preference
  const setTheme = (newThemeKey: ThemeKey) => {
    setThemeKey(newThemeKey);
    localStorage.setItem("theme", newThemeKey);
    
    // Update CSS variables
    const root = document.documentElement;
    const newTheme = themes[newThemeKey];
    
    // Set all theme colors
    root.style.setProperty('--background', newTheme.background);
    root.style.setProperty('--foreground', newTheme.textColor);
    root.style.setProperty('--primary', newTheme.primary);
    root.style.setProperty('--primary-foreground', '#FFFFFF');
    root.style.setProperty('--secondary', newTheme.primary);
    root.style.setProperty('--secondary-foreground', '#FFFFFF');
    root.style.setProperty('--muted', newTheme.background);
    root.style.setProperty('--muted-foreground', newTheme.textColor + '99');
    root.style.setProperty('--accent', newTheme.background);
    root.style.setProperty('--accent-foreground', newTheme.primary);
    root.style.setProperty('--card-background', newTheme.background);
    root.style.setProperty('--card-foreground', newTheme.textColor);
    root.style.setProperty('--popover-background', newTheme.background);
    root.style.setProperty('--popover-foreground', newTheme.textColor);
    root.style.setProperty('--border', newTheme.textColor + '20');
    root.style.setProperty('--input', newTheme.textColor + '20');
    root.style.setProperty('--ring', newTheme.primary);
  };

  // Apply theme on initial load and when theme changes
  useEffect(() => {
    setTheme(themeKey);
  }, [themeKey]);

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
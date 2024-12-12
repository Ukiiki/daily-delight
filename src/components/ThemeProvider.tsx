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
    Object.entries(newTheme.colors).forEach(([key, value]) => {
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

    // Set additional theme variables
    root.style.setProperty('--card-background', newTheme.colors.background);
    root.style.setProperty('--card-foreground', newTheme.colors.foreground);
    root.style.setProperty('--popover-background', newTheme.colors.background);
    root.style.setProperty('--popover-foreground', newTheme.colors.foreground);
    root.style.setProperty('--border', `${newTheme.colors.primary.DEFAULT}20`);
    root.style.setProperty('--input', `${newTheme.colors.primary.DEFAULT}20`);
    root.style.setProperty('--ring', newTheme.colors.primary.DEFAULT);

    // Update body background and text color
    document.body.style.backgroundColor = newTheme.colors.background;
    document.body.style.color = newTheme.colors.foreground;
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
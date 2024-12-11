import { createContext, useContext, useEffect, useState } from "react";
import { Theme, defaultTheme, themes } from "@/config/themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeName: string) => void;
  isAutoTheme: boolean;
  setIsAutoTheme: (auto: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: () => null,
  isAutoTheme: true,
  setIsAutoTheme: () => null,
});

const getSeasonalTheme = (): Theme => {
  const now = new Date();
  const month = now.getMonth() + 1; // JavaScript months are 0-based
  const day = now.getDate();

  // Check for special occasions first
  if (month === 12 && day >= 1 && day <= 26) {
    return themes.find((t) => t.name === "christmas") || defaultTheme;
  }

  // Calculate Easter (simplified - you might want to use a proper Easter calculation)
  const easterApprox = new Date(now.getFullYear(), 3, 1); // April 1st as approximation
  if (
    month === 4 &&
    Math.abs(now.getTime() - easterApprox.getTime()) < 7 * 24 * 60 * 60 * 1000
  ) {
    return themes.find((t) => t.name === "easter") || defaultTheme;
  }

  // Check seasons
  if (month >= 3 && month <= 5) {
    return themes.find((t) => t.name === "spring") || defaultTheme;
  }
  if (month >= 6 && month <= 8) {
    return themes.find((t) => t.name === "summer") || defaultTheme;
  }
  if (month >= 9 && month <= 11) {
    return themes.find((t) => t.name === "fall") || defaultTheme;
  }
  return themes.find((t) => t.name === "winter") || defaultTheme;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isAutoTheme, setIsAutoTheme] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedAutoTheme = localStorage.getItem("autoTheme");
    
    setIsAutoTheme(savedAutoTheme ? JSON.parse(savedAutoTheme) : true);
    
    if (savedTheme && !isAutoTheme) {
      const found = themes.find((t) => t.name === savedTheme);
      if (found) setThemeState(found);
    } else {
      setThemeState(getSeasonalTheme());
    }
  }, []);

  // Check for seasonal theme changes every hour
  useEffect(() => {
    if (!isAutoTheme) return;

    const updateSeasonalTheme = () => {
      setThemeState(getSeasonalTheme());
    };

    updateSeasonalTheme(); // Initial check
    const interval = setInterval(updateSeasonalTheme, 60 * 60 * 1000); // Check every hour

    return () => clearInterval(interval);
  }, [isAutoTheme]);

  const setTheme = (themeName: string) => {
    const newTheme = themes.find((t) => t.name === themeName);
    if (newTheme) {
      setThemeState(newTheme);
      localStorage.setItem("theme", themeName);
      
      // Update CSS variables
      const root = document.documentElement;
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
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isAutoTheme, setIsAutoTheme }}>
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
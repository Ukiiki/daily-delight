export type ThemeColors = {
  primary: {
    DEFAULT: string;
    foreground: string;
  };
  secondary: {
    DEFAULT: string;
    foreground: string;
  };
  background: string;
  muted: {
    DEFAULT: string;
    foreground: string;
  };
  accent: {
    DEFAULT: string;
    foreground: string;
  };
};

export type Theme = {
  name: string;
  label: string;
  colors: ThemeColors;
};

export const themes: Theme[] = [
  {
    name: "classic",
    label: "Classic",
    colors: {
      primary: {
        DEFAULT: "#2D3648",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#64748B",
        foreground: "#FFFFFF",
      },
      background: "#FAFBFF",
      muted: {
        DEFAULT: "#F1F5F9",
        foreground: "#334155",
      },
      accent: {
        DEFAULT: "#475569",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "purple",
    label: "Purple",
    colors: {
      primary: {
        DEFAULT: "#9b87f5",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#7E69AB",
        foreground: "#FFFFFF",
      },
      background: "#E5DEFF",
      muted: {
        DEFAULT: "#D6BCFA",
        foreground: "#1A1F2C",
      },
      accent: {
        DEFAULT: "#1A1F2C",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "pastel",
    label: "Pastel",
    colors: {
      primary: {
        DEFAULT: "#8B5CF6",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#FEF7CD",
        foreground: "#1A1F2C",
      },
      background: "#F1F0FB",
      muted: {
        DEFAULT: "#FEC6A1",
        foreground: "#1A1F2C",
      },
      accent: {
        DEFAULT: "#E5DEFF",
        foreground: "#1A1F2C",
      },
    },
  },
];

export const defaultTheme = themes[0];
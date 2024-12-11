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
  seasonal?: boolean;
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
    name: "cream",
    label: "Cream",
    colors: {
      primary: {
        DEFAULT: "#8B5E3C",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#A17A5C",
        foreground: "#FFFFFF",
      },
      background: "#FDE1D3",
      muted: {
        DEFAULT: "#F5D6C6",
        foreground: "#4A3828",
      },
      accent: {
        DEFAULT: "#6B4832",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "warm-white",
    label: "Warm White",
    colors: {
      primary: {
        DEFAULT: "#4A5568",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#718096",
        foreground: "#FFFFFF",
      },
      background: "#F1F0FB",
      muted: {
        DEFAULT: "#E2E8F0",
        foreground: "#2D3748",
      },
      accent: {
        DEFAULT: "#2D3748",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "sepia",
    label: "Sepia",
    colors: {
      primary: {
        DEFAULT: "#8B4513",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#A0522D",
        foreground: "#FFFFFF",
      },
      background: "#F4E4BC",
      muted: {
        DEFAULT: "#E8D5AA",
        foreground: "#704214",
      },
      accent: {
        DEFAULT: "#704214",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "nightfall",
    label: "Nightfall",
    colors: {
      primary: {
        DEFAULT: "#1A1F2C",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#2C3444",
        foreground: "#FFFFFF",
      },
      background: "#0F141E",
      muted: {
        DEFAULT: "#1F2937",
        foreground: "#D1D5DB",
      },
      accent: {
        DEFAULT: "#3B4252",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "spring",
    label: "Spring",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#4B9460",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#FEF7CD",
        foreground: "#2D3648",
      },
      background: "#F2FCE2",
      muted: {
        DEFAULT: "#FFDEE2",
        foreground: "#2D3648",
      },
      accent: {
        DEFAULT: "#2D3648",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "summer",
    label: "Summer",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#0FA0CE",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#FEC6A1",
        foreground: "#2D3648",
      },
      background: "#F0FAFF",
      muted: {
        DEFAULT: "#FEF7CD",
        foreground: "#2D3648",
      },
      accent: {
        DEFAULT: "#33C3F0",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "fall",
    label: "Fall",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#8B4513",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#FEC6A1",
        foreground: "#2D3648",
      },
      background: "#FDE1D3",
      muted: {
        DEFAULT: "#F1F5F9",
        foreground: "#1A1F2C",
      },
      accent: {
        DEFAULT: "#1A1F2C",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "winter",
    label: "Winter",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#1A1F2C",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#E5DEFF",
        foreground: "#1A1F2C",
      },
      background: "#F8F9FF",
      muted: {
        DEFAULT: "#aaadb0",
        foreground: "#1A1F2C",
      },
      accent: {
        DEFAULT: "#2D3648",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "christmas",
    label: "Christmas",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#ea384c",
        foreground: "#FFFFFF",
      },
      secondary: {
        DEFAULT: "#1A1F2C",
        foreground: "#FFFFFF",
      },
      background: "#F8F9FF",
      muted: {
        DEFAULT: "#F1F5F9",
        foreground: "#1A1F2C",
      },
      accent: {
        DEFAULT: "#2D3648",
        foreground: "#FFFFFF",
      },
    },
  },
  {
    name: "easter",
    label: "Easter",
    seasonal: true,
    colors: {
      primary: {
        DEFAULT: "#D3E4FD",
        foreground: "#2D3648",
      },
      secondary: {
        DEFAULT: "#FFDEE2",
        foreground: "#2D3648",
      },
      background: "#FEF7CD",
      muted: {
        DEFAULT: "#F1F5F9",
        foreground: "#2D3648",
      },
      accent: {
        DEFAULT: "#2D3648",
        foreground: "#FFFFFF",
      },
    },
  },
];

export const defaultTheme = themes[0];

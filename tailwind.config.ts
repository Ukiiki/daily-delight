import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        foreground: "#333333",
        card: "#FFFFFF",
        "card-foreground": "#333333",
        border: "#E5E7EB",
        input: "#FFFFFF",
        primary: {
          DEFAULT: "#333333",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8E9196",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#8A898C",
          foreground: "#8A898C",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
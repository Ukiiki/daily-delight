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
        background: "#FFFFFF",
        foreground: "#1A1F2C",
        card: "#FFFFFF",
        "card-foreground": "#1A1F2C",
        border: "#E5E7EB",
        input: "#F6F6F7",
        primary: {
          DEFAULT: "#1A1F2C",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6E59A5",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
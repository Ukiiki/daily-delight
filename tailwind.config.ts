import type { Config } from 'tailwindcss';
import { lightTheme } from './src/lib/theme';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: lightTheme.colors.primary,
        secondary: lightTheme.colors.secondary,
        accent: lightTheme.colors.accent,
        success: lightTheme.colors.success,
        warning: lightTheme.colors.warning,
        danger: lightTheme.colors.danger,
        background: lightTheme.colors.background,
        foreground: lightTheme.colors.foreground,
        border: lightTheme.colors.border,
        ring: lightTheme.colors.ring,
        content: lightTheme.colors.content,
      },
      spacing: lightTheme.spacing,
      fontFamily: lightTheme.typography.fonts,
      fontSize: lightTheme.typography.sizes,
      fontWeight: lightTheme.typography.weights,
      borderRadius: lightTheme.radius,
      boxShadow: lightTheme.shadows,
      transitionDuration: {
        DEFAULT: '150ms',
        fast: '100ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
} as Config;

export default config;
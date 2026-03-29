import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#39475f",
        "on-error-container": "#ffdad6",
        "on-primary-fixed": "#0d1c32",
        "on-tertiary-fixed-variant": "#444749",
        "surface-dim": "#041329",
        "surface": "#041329",
        "outline": "#8f9097",
        "on-primary-container": "#74829d",
        "surface-container": "#112036",
        "outline-variant": "#44474d",
        "secondary-fixed-dim": "#ffb4a8",
        "on-background": "#d6e3ff",
        "tertiary-fixed-dim": "#c4c7c9",
        "on-secondary": "#690000",
        "on-tertiary-container": "#7f8284",
        "surface-container-highest": "#27354c",
        "on-secondary-fixed": "#410000",
        "surface-container-low": "#0d1c32",
        "inverse-primary": "#515f78",
        "on-surface-variant": "#c5c6cd",
        "background": "#041329",
        "secondary": "#ffb4a8",
        "secondary-fixed": "#ffdad4",
        "inverse-surface": "#d6e3ff",
        "surface-variant": "#27354c",
        "surface-bright": "#2c3951",
        "on-primary": "#233148",
        "error": "#ffb4ab",
        "tertiary-container": "#16191b",
        "primary-fixed-dim": "#b9c7e4",
        "inverse-on-surface": "#233148",
        "surface-container-lowest": "#010e24",
        "primary-container": "#0a192f",
        "on-tertiary-fixed": "#191c1e",
        "on-tertiary": "#2d3133",
        "primary-fixed": "#d6e3ff",
        "on-secondary-fixed-variant": "#920703",
        "on-surface": "#d6e3ff",
        "secondary-container": "#920703",
        "on-error": "#690005",
        "primary": "#b9c7e4",
        "error-container": "#93000a",
        "tertiary": "#c4c7c9",
        "surface-tint": "#b9c7e4",
        "tertiary-fixed": "#e0e3e5",
        "on-secondary-container": "#ff9a8a",
        "surface-container-high": "#1c2a41"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;

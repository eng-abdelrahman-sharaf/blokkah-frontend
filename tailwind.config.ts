import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");


const colors = {
  Gray: {
    "25": "#FCFCFD",
    "50": "#F9FAFB",
    "100": "#F2F4F7",
    "200": "#E4E7EC",
    "300": "#D0D5DD",
    "400": "#98A2B3",
    "500": "#667085",
    "600": "#475467",
    "700": "#344054",
    "800": "#101828",
    "900": "#101828",
  },
  Brand: {
    "25": "#FCFDFF",
    "50": "#E3E8ED",
    "100": "#CAD3DB",
    "200": "#B0BDC8",
    "300": "#97A8B6",
    "400": "#657E92",
    "500": "#32536D",
    "600": "#002949",
    "700": "#00213A",
    "800": "#00192C",
    "900": "#00101D",
  },
  Success: {
    "25": "#F6FEF9",
    "50": "#ECFDF3",
    "100": "#D1FADF",
    "200": "#A6F4C5",
    "300": "#6CE9A6",
    "400": "#32D583",
    "500": "#12B76A",
    "600": "#039855",
    "700": "#027A48",
    "800": "#05603A",
    "900": "#054F31",
  },
  Error: {
    "25": "#FFFBFA",
    "50": "#FEF3F2",
    "100": "#FEE4E2",
    "200": "#FECDCA",
    "300": "#FDA29B",
    "400": "#F97066",
    "500": "#F04438",
    "600": "#D92D20",
    "700": "#B42318",
    "800": "#912018",
    "900": "#7A271A",
  },
  Secondary: {
    "25": "#FCFEFF",
    "50": "#E3F6FF",
    "100": "#CAEEFF",
    "200": "#B1E6FF",
    "600": "#02ADFF",
    "700": "#028BCD",
    "900": "#01486A",
  },
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      backgroundColor: colors,
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",

        inputBoxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        activeElementBoxShadow:
          "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E3F6FF",
      },

      blur: {
        xs: "2px",
      },

      // fontSize: {
      //   "7xl": ["72px", { lineHeight: "90px", letterSpacing: "-2px" }],
      //   "6xl": ["60px", { lineHeight: "72px", letterSpacing: "-2px" }],
      //   "5xl": ["48px", { lineHeight: "60px", letterSpacing: "-2px" }],
      //   "4xl": ["36px", { lineHeight: "44px", letterSpacing: "-2px" }],
      //   "3xl": ["30px", { lineHeight: "38px" }],
      //   "2xl": ["24px", { lineHeight: "32px" }],
      //   "xl": ["20px", { lineHeight: "30px" }],
      //   "lg": ["18px", { lineHeight: "28px" }],
      //   "md": ["16px", { lineHeight: "24px" }],
      //   "sm": ["14px", { lineHeight: "20px" }],
      //   "xs": ["12px", { lineHeight: "18px" }],
      // },

      fontSize: {
        "7xl": ["4.5rem", { lineHeight: "5.625rem", letterSpacing: "-0.125rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.5rem", letterSpacing: "-0.125rem" }],
        "5xl": ["3rem", { lineHeight: "3.75rem", letterSpacing: "-0.125rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.125rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "xl": ["1.25rem", { lineHeight: "1.875rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "md": ["1rem", { lineHeight: "1.5rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "xs": ["0.75rem", { lineHeight: "1.125rem" }]
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
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
      'Error': {
        '25': 'FFFBFA',
        '50': '#FEF3F2',
        '100': '#FEE4E2',
        '200': '#FECDCA',
        '300': '#FDA29B',
        '400': '#F97066',
        '500': '#F04438',
        '600': '#D92D20',
        '700': '#B42318',
        '800': '#912018',
        '900': '#7A271A'
      }
    },
    backgroundColor: {
      'bg-white': '#FFFFFF'
    },
    boxShadow: {
      inputBoxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      inputFocusedBoxShadow:
        "0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E3F6FF",
    },
    fontFamily: {
      Cairo: ["Cairo", "sans-serif"],
    },
    fontSize: {
      "display-2xl": [
        (72 / 16).toString() + "rem",
        {
          lineHeight: (90 / 16).toString() + "rem",
          letterSpacing: (-2 / 16).toString() + "rem",
        },
      ],
      "display-xl": [
        (60 / 16).toString() + "rem",
        {
          lineHeight: (72 / 16).toString() + "rem",
          letterSpacing: (-2 / 16).toString() + "rem",
        },
      ],
      "display-lg": [
        (48 / 16).toString() + "rem",
        {
          lineHeight: (60 / 16).toString() + "rem",
          letterSpacing: (-2 / 16).toString() + "rem",
        },
      ],
      "display-md": [
        (36 / 16).toString() + "rem",
        {
          lineHeight: (44 / 16).toString() + "rem",
          letterSpacing: (-2 / 16).toString() + "rem",
        },
      ],
      "display-sm": [
        (30 / 16).toString() + "rem",
        {
          lineHeight: (38 / 16).toString() + "rem",
        },
      ],
      "display-xs": [
        (24 / 16).toString() + "rem",
        {
          lineHeight: (32 / 16).toString() + "rem",
        },
      ],
      "text-xl": [
        (20 / 16).toString() + "rem",
        {
          lineHeight: (30 / 16).toString() + "rem",
        },
      ],
      "text-lg": [
        (18 / 16).toString() + "rem",
        {
          lineHeight: (28 / 16).toString() + "rem",
        },
      ],
      "text-md": [
        (16 / 16).toString() + "rem",
        {
          lineHeight: (24 / 16).toString() + "rem",
        },
      ],
      "text-sm": [
        (14 / 16).toString() + "rem",
        {
          lineHeight: (20 / 16).toString() + "rem",
        },
      ],
      "text-xs": [
        (12 / 16).toString() + "rem",
        {
          lineHeight: (18 / 16).toString() + "rem",
        },
      ],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {},
    extend: {
      fontSize: {
        sm: ['0.875rem', '1.25rem'],
      },
    },
  },
  plugins: [],
};
export default config;

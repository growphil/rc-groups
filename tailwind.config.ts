import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E90FF",
          hover: "#1670C7",
          active: "#0F5CA8",
          light: "#E8F4FE",
          surface: "#F5F9FD",
        },
        brand: {
          primary: "#1E90FF",
          "electric-cyan": "#00BFFF",
          "sky-blue": "#87CEEB",
          "dark-turquoise": "#00CED1",
          turquoise: "#40E0D0",
          blue: "#1E90FF",
          navy: "#071426",
          slate: "#0B1528",
          muted: "#475569",
          border: "#DCE8F2",
          surface: "#F5F9FD",
          dark: "#071426",
          text: "#0B1528",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-corporate": "linear-gradient(135deg, #1E90FF 0%, #00BFFF 100%)",
        "gradient-technology": "linear-gradient(135deg, #00CED1 0%, #40E0D0 100%)",
        "gradient-extended": "linear-gradient(135deg, #1E90FF 0%, #00BFFF 50%, #00CED1 100%)",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(30, 144, 255, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -4px rgba(7, 20, 38, 0.06), 0 4px 10px -2px rgba(7, 20, 38, 0.03)",
        elevated: "0 20px 40px -8px rgba(30, 144, 255, 0.16)",
        "glow-primary": "0 0 25px rgba(30, 144, 255, 0.35)",
        "glow-turquoise": "0 0 25px rgba(0, 206, 209, 0.35)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

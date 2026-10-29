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
          DEFAULT: "#019FF9",
          hover: "#008ee0",
          light: "#E0F2FE",
          surface: "#F0F8FF",
        },
        brand: {
          blue: "#019FF9",
          dark: "#071426",
          navy: "#0B1D36",
          surface: "#F0F8FF",
          border: "#DCE8F2",
          text: "#111827",
          muted: "#64748B",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(1, 159, 249, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -4px rgba(12, 29, 54, 0.06), 0 4px 10px -2px rgba(12, 29, 54, 0.03)",
        elevated: "0 20px 40px -8px rgba(1, 159, 249, 0.16)",
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

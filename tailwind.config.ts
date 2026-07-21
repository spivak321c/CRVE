import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        // Neon accents
        neon: {
          cyan: "#00ffff",
          pink: "#ff006e",
          lime: "#00ff88",
          purple: "#b800ff",
          yellow: "#ffff00",
        },
        // Luxury grays
        neutral: {
          950: "#0a0a0a",
          900: "#1a1a1a",
          800: "#2d2d2d",
          700: "#3f3f3f",
          600: "#525252",
          500: "#656565",
          400: "#787878",
          300: "#a1a1a1",
          200: "#cacaca",
          100: "#f3f3f3",
          50: "#fafafa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        sm: ["14px", { lineHeight: "20px", letterSpacing: "0.25px" }],
        base: ["16px", { lineHeight: "24px", letterSpacing: "0px" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.5px" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.5px" }],
        "2xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.75px" }],
        "3xl": ["30px", { lineHeight: "36px", letterSpacing: "-1px" }],
        "4xl": ["36px", { lineHeight: "44px", letterSpacing: "-1px" }],
        "5xl": ["48px", { lineHeight: "56px", letterSpacing: "-1.5px" }],
        "6xl": ["60px", { lineHeight: "72px", letterSpacing: "-2px" }],
        "7xl": ["72px", { lineHeight: "90px", letterSpacing: "-2.5px" }],
        "8xl": ["96px", { lineHeight: "115px", letterSpacing: "-3px" }],
      },
      animation: {
        "marquee": "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)" },
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 10px rgba(255, 0, 110, 0.3)" },
          "50%": { textShadow: "0 0 20px rgba(255, 0, 110, 0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.16, 1, 0.3, 1)",
        "bounce-out": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [],
}

export default config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cactus: {
          50: "#effff5",
          100: "#d7ffe6",
          300: "#75f0a7",
          400: "#31df7a",
          500: "#12c963",
          600: "#08a64e",
          900: "#063f23"
        },
        ink: "#07110c",
        night: "#020805"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(18, 201, 99, 0.22)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-cactus": "radial-gradient(circle at top, rgba(18,201,99,.28), transparent 38%), radial-gradient(circle at 80% 10%, rgba(117,240,167,.16), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;

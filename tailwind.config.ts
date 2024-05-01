import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        normal: {
          DEFAULT: "#A8A77A",
          foreground: "",
        },
        fire: {
          DEFAULT: "#EE8130",
          foreground: "",
        },
        water: {
          DEFAULT: "#6390F0",
          foreground: "",
        },
        electric: {
          DEFAULT: "#F7D02C",
          foreground: "",
        },
        grass: {
          DEFAULT: "#7AC74C",
          foreground: "",
        },
        ice: {
          DEFAULT: "#96D9D6",
          foreground: "",
        },
        fighting: {
          DEFAULT: "#C22E28",
          foreground: "",
        },
        poison: {
          DEFAULT: "#A33EA1",
          foreground: "",
        },
        ground: {
          DEFAULT: "#E2BF65",
          foreground: "",
        },
        flying: {
          DEFAULT: "#A98FF3",
          foreground: "",
        },
        psychic: {
          DEFAULT: "#F95587",
          foreground: "",
        },
        bug: {
          DEFAULT: "#A6B91A",
          foreground: "",
        },
        rock: {
          DEFAULT: "#B6A136",
          foreground: "",
        },
        ghost: {
          DEFAULT: "#735797",
          foreground: "",
        },
        dragon: {
          DEFAULT: "#6F35FC",
          foreground: "white",
        },
        dark: {
          DEFAULT: "#705746",
          foreground: "",
        },
        steel: {
          DEFAULT: "#B7B7CE",
          foreground: "",
        },
        fairy: {
          DEFAULT: "#D685AD",
          foreground: "",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

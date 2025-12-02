import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        charcoal: {
          50: "#f7f7f7",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6b6b6b",
          600: "#545454",
          700: "#3f3f3f",
          800: "#2a2a2a",
          900: "#1a1a1a",
          950: "#0f0f0f",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        cyan: {
          400: "#06b6d4",
          500: "#06b6d4",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(45, 212, 191, 0.5), 0 0 40px rgba(45, 212, 191, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(45, 212, 191, 0.8), 0 0 60px rgba(45, 212, 191, 0.5)",
          },
        },
        "glow-intense": {
          "0%, 100%": {
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 50px rgba(6, 182, 212, 1), 0 0 80px rgba(20, 184, 166, 0.6)",
          },
        },
        "border-glow": {
          "0%, 100%": {
            borderColor: "rgba(45, 212, 191, 0.5)",
            boxShadow: "0 0 15px rgba(45, 212, 191, 0.3) inset",
          },
          "50%": {
            borderColor: "rgba(45, 212, 191, 0.8)",
            boxShadow: "0 0 25px rgba(45, 212, 191, 0.5) inset",
          },
        },
        "float-glow": {
          "0%, 100%": {
            transform: "translateY(0px)",
            boxShadow: "0 20px 40px rgba(45, 212, 191, 0.3)",
          },
          "50%": {
            transform: "translateY(-10px)",
            boxShadow: "0 30px 50px rgba(45, 212, 191, 0.5)",
          },
        },
        "text-glow": {
          "0%, 100%": {
            textShadow: "0 0 10px rgba(45, 212, 191, 0.5), 0 0 20px rgba(45, 212, 191, 0.3)",
          },
          "50%": {
            textShadow: "0 0 20px rgba(45, 212, 191, 0.8), 0 0 30px rgba(45, 212, 191, 0.5)",
          },
        },
        "pulse-glow": {
          "0%": {
            opacity: "0.8",
            boxShadow: "0 0 10px rgba(45, 212, 191, 0.4)",
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 30px rgba(45, 212, 191, 0.8)",
          },
          "100%": {
            opacity: "0.8",
            boxShadow: "0 0 10px rgba(45, 212, 191, 0.4)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "glow-intense": "glow-intense 2.5s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "float-glow": "float-glow 3s ease-in-out infinite",
        "text-glow": "text-glow 2.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "text-sm-leading-5-medium":
          "var(--text-sm-leading-5-medium-font-family)",
        "text-sm-leading-5-normal":
          "var(--text-sm-leading-5-normal-font-family)",
        "text-sm-leading-6-medium":
          "var(--text-sm-leading-6-medium-font-family)",
        "text-sm-leading-6-semibold":
          "var(--text-sm-leading-6-semibold-font-family)",
        "text-xs-leading-4-medium":
          "var(--text-xs-leading-4-medium-font-family)",
        "text-xs-leading-4-normal":
          "var(--text-xs-leading-4-normal-font-family)",
        "text-xs-leading-4-semibold":
          "var(--text-xs-leading-4-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadows-shadow-sm": "var(--shadows-shadow-sm)" },
      colors: {
        brand: {
          50: '#FFF2EE',
          100: '#FFE9E2',
          200: '#FFD4C6',
          300: '#FFBDA6',
          400: '#FF9F7D',
          500: '#FF835D',
          600: '#FF6A3F',
          700: '#FF4D1C',
          800: '#FF3300',
          900: '#CC2900',
          950: '#B32400',
        },
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

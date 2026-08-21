/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        neutral: {
          50: "#F7F7F7",
          100: "#F0F0F0",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#6B6B6B",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 12px -2px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 25px -5px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 35px -10px rgba(0, 0, 0, 0.08)",
        pill: "0 4px 20px rgba(0, 0, 0, 0.06)",
        card: "0 2px 12px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 30px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        slideDown: "slideDown 0.4s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
}

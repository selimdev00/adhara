/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#0584FE",
          DEFAULT: "#0584FE",
          dark: "#1253A2",
        },
        accent: {
          DEFAULT: "#FD8301",
        },
        gray: {
          card: {
            100: "#FBFCFD",
            200: "#EEEFF1",
          },
          bullet: "#D9D9D9",
          text: {
            DEFAULT: "#5B6470",
          },
        },
        black: {
          100: "#1A1D21",
          DEFAULT: "#0E1318",
        },
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(90deg, #0E1318 30%, #1C2734 73%)",
      },
      fontFamily: {
        pt: ["PT Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,19,24,0.04), 0 8px 24px rgba(14,19,24,0.08)",
        "card-hover":
          "0 4px 8px rgba(14,19,24,0.06), 0 16px 40px rgba(14,19,24,0.12)",
        header: "0 2px 12px rgba(14,19,24,0.18)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1193px",
        },
      },
    },
  },
  plugins: [],
};

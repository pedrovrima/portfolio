module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#fcffe4",
          100: "#f6ffc5",
          200: "#ecff92",
          300: "#dcff53",
          400: "#c8fb20",
          500: "#ade700",
          600: "#82b500",
          700: "#638902",
          800: "#4e6c08",
          900: "#425b0c",
          950: "#213300",
        },
      },

      animation: {
        shine: "move 15s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 180s linear infinite",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },

        move: {
          "0%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(300px)" },
          "100%": { transform: "translateX(300px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

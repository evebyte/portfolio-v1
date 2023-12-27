/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light mode:
        "lm-primary-blue": "#0044ff",
        "lm-primary-green": "#00ffbb",
        "lm-primary-cyan": "#00c3ff",
        "lm-secondary-green": "#00392a",
        "lm-secondary-blue": "#001757",
        "lm-secondary-white": "#c8d7ff",

        // dark mode:
        "dm-primary-blue": "#001347",
        "dm-primary-green": "#005e45",
        "dm-primary-cyan": "#006e90",
        "dm-secondary-green": "#00392a",
        "dm-secondary-blue": "#001757",
        "dm-secondary-white": "#c8d7ff",
      },
    },
  },
  plugins: [],
};

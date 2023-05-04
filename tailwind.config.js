module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "false", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        128: "128rem",
        64: "53rem",
        82: "45rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

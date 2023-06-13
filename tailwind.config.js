module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1020px",
      },

      colors: {
        bg_primary: "var(--background-color)",
        title: "var(--title-color)",
        text_color: "var(--text-color)",
        title_color: "var(--title-color)",
        subTitle: "var(--subTitle)",
        btn_bg: "var(--btn-bg)",
        btn_hover: "var(--btn-hover)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: "320px",
            ...defaultTheme.screens,
            "3xl": "1600px",
            "4xl": "1920px"
        }
    },
    plugins: []
};

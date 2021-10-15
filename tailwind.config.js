module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            "primary-500": "#1045FF",
            "primary-300": "#217DFF",
            "primary-100": "#33B0FF",
            "secondary-dark": "#070928",
            "secondary-light": "#F8F8FA",
            "secondary-gray": "#9CA3AF",
            white: "#FFFFFF",
            danger: "#F16063",
            warning: "#FFB020",
            success: "#66CB9F",
        },
        fontFamily: {
            noto: ["Noto Sans", "sans-serif"],
            gilroy: ["Gilroy", "sans-serif"],
        },
        outline: {
            blue: ["2px solid #1045FF", "-2px"],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

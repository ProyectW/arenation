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
            "primary-800": "#0A142F",
            white: "#FFFFFF",
            danger: "#F16063",
            warning: "#FFB020",
            success: "#66CB9F",
        },
        fontFamily: {
            noto: ["Noto Sans", "sans-serif"],
            gilroy: ["Gilroy", "sans-serif"],
        },
        extend: {
            outline: {
                blue: ["2px solid #1045FF", "-2px"],
                white: ["2px solid #FFFFFF", "-2px"],
                dark: ["2px solid #070928", "-2px"],
            },
            boxShadow: {
                DropDown: "0px 6px 20px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

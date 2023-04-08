/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "blue-dark": "#1F1A50",
                "mustard": "#D09B2C",
                "cyan": "#13A89E",
                "red": "#FF5050"
            },
            fontFamily: {
                IRANSansX: ['IRANSansX']
            }
        },
    },
    plugins: [],
}


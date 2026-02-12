/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C13584', // Pink/Magenta color from design
                background: '#F5F1E8', // Beige/cream background
                'quiz-gray': '#808080',
            },
        },
    },
    plugins: [],
    // Optimize for production
    future: {
        hoverOnlyWhenSupported: true,
    },
}

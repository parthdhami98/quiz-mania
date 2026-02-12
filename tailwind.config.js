export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C13584',
                background: '#F5F1E8',
                'quiz-gray': '#808080',
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
}

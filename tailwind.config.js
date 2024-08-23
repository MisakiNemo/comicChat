/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}', '../../components/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontWeight: {
                superBold: "900",
            },
            fontFamily: {
                ComicNeue: ['ComicNeue', 'cursive'],
            },
            spacing: {
                "160": "40rem",
                "180": "45rem",
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                gradientRadial: 'radial-gradient(var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                heading: ['Barlow', 'sans-serif'],
            },
            colors: {
                secondaryWheat: '#fcdc7d',
                secondaryMarigold: '#ffc006',
                primaryPetrol: '#005f69',
                primaryPaleTeal: '#9cc4b2',
                primaryVeryLightGreen: '#e3efe0',
                secondaryMango: '#ff9829',
                redsBerry: '#800f2d',
                redsRouge: '#bc1742',
                redsPinkishRed: '#e52a4d',
                redsSalmon: '#ed8682',
                shadesBlack: '#222',
                shadesVeryDarkGrey: '#4a4a4a',
                shadesDarkGrey: '#606060',
                shadesDarkMetal: '#7b7b7b',
                shadesMetal: '#959595',
                shadesGrey: '#b5b5b5',
                shadesLightGrey: '#ddd',
                shadesVeryLightGrey: '#ebebeb',
                shadesOffWhite: '#f5f5f5',
                offWhite: '#fafbfd',
                shadesWhite: '#fff',
                lightSeaGreen: '#2ec4b6',
                isabelline: '#fbf7f4',
                chinaRose: '#ab4e68',
            },
            spacing: {
                xxs: '4px',
                xs: '8px',
                s: '12px',
                m: '16px',
                l: '20px',
                xl: '24px',
                xxl: '32px',
            },
            borderRadius: {},
            dropShadow: {
                default: '0px 4px 24px rgba(0, 0, 0, 0.25)',
            },
            boxShadow: {
                default: 'inset 0px 0px 400px 30px',
            },
        },
    },
};

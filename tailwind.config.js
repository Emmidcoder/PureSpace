/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px',
        bscreen: '900px'
      },

      colors: {
        txtcl: "#233434",
        primary: {
          100: '#E6F7F8',
          200: '#B4EFF1',
          300: '#71CFD2',
          400: '#55A8AB',
          500: '#227578',
        },
      },

      fontFamily: {
        heading: 'Merriweather',
        body: 'DM Sans'
      },

      lineHeight: {
        '20': '3.5rem'
      },
    },
  },
  plugins: [],
}


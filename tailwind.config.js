/** @type {import('tailwindcss')'.Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DarkBlue: 'hsl(233, 26%, 24%)',
          LimeGreen: 'hsl(136, 65%, 51%)',
          BrightCyan: 'hsl(192, 70%, 51%)',
          GrayishBlue: 'hsl(233, 8%, 62%)',
          LightGrayishBlue: 'hsl(220, 16%, 96%)',
          VeryLightGray: 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)',
          light: '#4f46e5',   // Custom light shade
          DEFAULT: '#4338ca', // Default color (usually the main one)
          dark: '#3730a3',    // Custom dark shade
        },
        secondary: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        accent: '#10b981',  // Single custom color
        danger: '#ef4444',  // Another single custom color
      },
      screens: {
        'xs': '480px',  // Custom extra small breakpoint
        '3xl': '1600px', // Custom extra large breakpoint
      },
    },
  },
  plugins: [],
}


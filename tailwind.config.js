/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.{html,liquid,md,js}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        serif: ["EB Garamond", "serif"],
        sans: ["Arvo", "sans"]
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#f5f0e6", // alabaster
          "base-content": "#230616", // dark purple
          "accent": "#007049", // dartmouth green
          "secondary": "#975020", // brown sugar
          "neutral": "#EAE0CD", // pearl
          "neutral-content": "#230616" // dark purple
        },
      }, 
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#11030B", // licorice
          "base-content": "#E7DBC5", // pearl
          "accent": "#61A88F", // zomp
          "secondary": "#C2845B", // brown sugar
          "neutral": "#33272e", // raisin black
          "neutral-content": "#e8e3da" // alabaster
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
}


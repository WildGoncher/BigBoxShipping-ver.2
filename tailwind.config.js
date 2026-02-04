// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom colours
      colors: {
        'dark-green': 'var(--color-dark-green)',
        'dark-blue': 'var(--color-dark-blue)',  
        'dark-red': 'var(--color-dark-red)',
        'grey': 'var(--color-grey)',
        'white': 'var(--color-white)',
        'bright-green': 'var(--color-bright-green)',
        'bright-orange': 'var(--color-bright-orange)',
        'bright-amber': 'var(--color-bright-amber)',
      },
      // Custom shadows 
      boxShadow: {
        'green-inset-sm': 'inset 0 0 5px var(--color-bright-green-shadow-15)',
        'green-inset-lg': 'inset 0 0 30px var(--color-bright-green-shadow-30)',
        'green-outset': '0 0 25px var(--color-bright-green-shadow-30)',
        'green-inset-hover': 'inset 0 0 10px var(--color-bright-green-shadow-40)',
      }
    },
  },
  plugins: [],
}

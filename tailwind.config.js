/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif'],
      },
      colors: {
        'c-green': '#4CAF50',
        'c-light-green': '#A3D9A5',
        'c-dark': '#1B1B1B',
        'c-beige': '#FCF1E6',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        cantoEsquerdo: '4.1px -5px 0 0 white',
        cantoDireito: '-4.1px -5px 0 0 white',
      },
      colors: {
        colorMenuPrimary: '#0C3EA6',
        colorMenuSecondary: '#051840',
        colorBackground: '#ECE9E9',
        colorCardPrimary: '#259821',
        colorCardSecondary: '#FFC300',
        colorCardTerciary: '#FF7200'
      }
    },
  },
  plugins: [],
}


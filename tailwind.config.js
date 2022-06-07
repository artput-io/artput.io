module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  theme: {
    colors: {
      main: '#fff',
      secundary:"#000"
    },
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '0rem',
        '2xl': '0rem',
      }
    },
    fontFamily: {
      passionOne: ['"Space Mono"', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
}
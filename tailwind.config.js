/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-twitter': 'linear-gradient(144deg, #84d0ff, #19a7ff 50%, #1da1f2 60%, #1a7ee9)',
        'gradient-github': 'linear-gradient(144deg, #666, #999 50%, #ccc 60%, #eee)',
        'gradient-zenn': 'linear-gradient(144deg,#fff,#b8d3ff 70%,#8fceff)',
        'gradient-qiita': 'linear-gradient(144deg, #fff, #aaf5aa 5%, #55c550)',
        'gradient-shinaps': 'linear-gradient(144deg, #fff, #cda6ff 70%, #7c3aed)',
      },
    },
  },
  plugins: [],
}

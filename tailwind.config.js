/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx,vue,scss,html}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["synthwave","winter"],
    //themes: false,
    darkTheme: "synthwave",
  },
  plugins: [
     require('daisyui'),
  ],
}


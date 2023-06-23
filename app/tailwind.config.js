/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#BA91A4",
        purple_dark: "#5F3F4E",
        gray: "#333333",
        pale_gray: "#737373",
        pale_secondary_gray: "#AAAAAA",
        background: "#F0E9E8",
        pale_yellow: "#FFF9E2",
      },
      fontFamily: {
        basic: [
          "Montserrat",
          "游ゴシック",
          "YuGothic",
          "ヒラギノ角ゴ ProN W3",
          "Hiragino Kaku Gothic ProN",
          "メイリオ",
          "Meiryo,sans-serif",
        ],
        mincho: [
          "游明朝",
          "YuMincho",
          "Hiragino Mincho ProN W3",
          "ヒラギノ明朝 ProN W3",
          "Hiragino Mincho ProN",
          "HG明朝E",
          "ＭＳ Ｐ明朝",
          "ＭＳ 明朝",
          "serif",
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

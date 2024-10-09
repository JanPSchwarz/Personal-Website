/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPreset1: "rgba(var(--colorPreset1), <alpha-value>)",
        colorPreset2: "rgba(var(--colorPreset2), <alpha-value>)",
        colorPreset3: "rgba(var(--colorPreset3), <alpha-value>)",
        colorPreset4: "rgba(var(--colorPreset4), <alpha-value>)",
        colorPreset5: "rgba(var(--colorPreset5), <alpha-value>)",
        colorPreset6: "rgba(var(--colorPreset6), <alpha-value>)",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`],
        spaceGrotesk: [`var(--font-spaceGrotesk)`],
      },
      screens: {
        lg: { raw: "(min-width: 1024px) and (orientation: landscape)" },
        "lg-portrait": {
          raw: "(min-width: 1024px) and (orientation: portrait)",
        },
        "md-landscape": {
          raw: "(min-width: 768px) and (orientation: landscape)",
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

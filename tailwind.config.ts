import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	purge: [
		'./public/**/*.html',
		'./app/**/*.{js,jsx,ts,tsx,vue}',
		'./components/*.{js,jsx,ts,tsx,vue}',
	],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"white": "#fff",
			"black": "#000",
			"blue": "#1fb6ff",
			"purple": "#7e5bef",
			"red": "#fd1d1d",
			"pink": "#ff49db",
			"orange": "#ff7849",
			"green": "#13ce66",
			"yellow": "#ffc82c",
			"gray-dark": "#273444",
			"gray": "#8492a6",
			"gray-light": "#d3dce6",
		},
		fontFamily: {
			sans: ["Poppins", "Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				AROneSans: ["AR One Sans", "sans-serif"],
			},
			spacing: {
				"128": "32rem",
				"144": "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	plugins: [],
};
export default config;

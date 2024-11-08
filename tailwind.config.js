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
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#3c3b6e",
				primaryDark: "#2A294D",
				secondary: "#b22234",
				secondaryDark: "#8e1b29",
			},
			screens: {
				lg: "1200px",
			},
		},
	},
	plugins: [],
	important: true,
};

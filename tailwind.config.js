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
				primary: "#003299",
				primaryDark: "#25327b",
				secondary: "#fecc00 ",
				secondaryDark: "#f5c500",
			},
			screens: {
				lg: "1200px",
			},
		},
	},
	plugins: [],
	important: true,
};

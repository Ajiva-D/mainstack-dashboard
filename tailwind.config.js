/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				soehne: ['Soehne', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				gray: {
					"100": "#EFF1F6",
					"400": "#4D5760",
					"500": "#31373D"
				},
				orange: {
					"100": "#FFDDCD",
					"300": "#FF5403"
				},
				black: "#131316"
			},
			letterSpacing: {
				tightest: '-.015em',
				tighter: '-.05em',
			},
		},
	},
	plugins: [],
}

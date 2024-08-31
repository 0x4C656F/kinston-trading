/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(221.2 83.2% 53.3%)',
				secondary: 'hsl(210 40% 96.1%)',
				accent: 'hsl(210 40% 96.1%)',
				background: 'hsl(0 0% 100%)',
				foreground: 'hsl(222.2 84% 4.9%)',
				muted: 'hsl(210 40% 96.1%)'
			},
			fontFamily: {
				sans: 'Inter, Inter variable, sans'
			}
		}
	},
	plugins: []
};

export type Provider = {
	name: string;
	country: string;
	icon: string;
};

export type Category = {
	name: string;
	icon: string;
	src: string;
	href: string;
	description: string;
	providers: Provider[];
};

export const categories: Category[] = [
	{
		name: 'furniture',
		icon: 'mdi:chair',
		href: '/furniture',
		description: 'Browse our collection of stylish and comfortable furniture.',
		src: '/images/furniture.webp',
		providers: [
			{ name: 'Calligaris ', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Désirée', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Mollura', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Badeloft', country: 'Germany', icon: 'twemoji:flag-germany' },
			{ name: 'Tandem Company', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'FELIX ITALIA', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'KAROL ITALIA', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Kartell', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'ARKETIPO', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Rimadesio', country: 'Italy', icon: 'twemoji:flag-italy' }
		]
	},
	{
		name: 'lights',
		icon: 'lucide:lightbulb',
		href: '/lights',
		description: 'Discover our stunning collection of lamps and lighting fixtures.',
		src: '/images/lights.avif',
		providers: [
			{ name: 'LEDS-C4', country: 'Spain', icon: 'twemoji:flag-spain' },
			{ name: 'Intra lighting', country: 'Slovenia', icon: 'twemoji:flag-slovenia' },
			{ name: 'Lee Broom', country: 'Ireland', icon: 'twemoji:flag-ireland' },
			{ name: 'Ideal Lux', country: 'Italy', icon: 'twemoji:flag-italy' }
		]
	},
	{
		name: 'audio',
		icon: 'mdi:speaker',
		href: '/audio',
		description: 'Experience high-quality sound with our premium audio systems.',
		src: '/images/audio.jpg',
		providers: [
			{ name: 'Bose Products', country: 'Netherlands', icon: 'twemoji:flag-netherlands' },
			{ name: 'ATEЇS Europe', country: 'Netherlands', icon: 'twemoji:flag-netherlands' },
			{ name: 'Audio Tuning Vertriebs', country: 'Austria', icon: 'twemoji:flag-austria' },
			{ name: 'MUSIC & LIGHTS', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Cambridge Audio', country: 'Ireland', icon: 'twemoji:flag-ireland' },
			{
				name: 'Transom Post Netherlands',
				country: 'Netherlands',
				icon: 'twemoji:flag-netherlands'
			},
			{ name: 'PVS', country: 'Belgium', icon: 'twemoji:flag-belgium' }
		]
	}
];

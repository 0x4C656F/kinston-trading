export type Provider = {
	name: string;
	country: string;
	icon: string;
};

export type Category = {
	name: string;
	icon: string;
	products: string[];
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
		products: [
			'/images/sofa.webp',
			'/images/tv-stand.webp',
			'/images/bed.webp',
			'/images/dining-table.webp',
			'/images/chair.webp',
			'/images/wardrobe.webp',
			'/images/bookshelf.webp'
		],
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
		products: [
			'/images/lamp.webp',
			'/images/lamp/lamp_0.webp',
			'/images/lamp/lamp_1.webp',
			'/images/lamp/lamp_2.webp',
			'/images/lamp/lamp_4.webp',
			'/images/lamp/lamp_3.webp',
			'/images/lamp/lamp_5.webp'
		],
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
		products: [
			'/images/sound/sound_0.webp',
			'/images/sound/sound_1.webp',
			'/images/sound/sound_2.webp',
			'/images/sound/sound_4.webp',
			'/images/sound/sound_3.webp',
			'/images/sound/sound_5.webp',
			'/images/sound/sound_6.webp'
		],

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

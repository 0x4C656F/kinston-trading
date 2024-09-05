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
			{ name: 'Calligaris S.p.A.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Désirée S.p.A.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Mollura & C.S.P.A.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Badeloft GmbH', country: 'Germany', icon: 'twemoji:flag-germany' },
			{ name: 'Tandem Company S.r.l.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'FELIX ITALIA srl', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'KAROL ITALIA S.R.L.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Kartell S.p.A.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'ARKETIPO S.r.l.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Rimadesio S.p.a.', country: 'Italy', icon: 'twemoji:flag-italy' }
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
			{ name: 'LEDS-C4 S.A.', country: 'Spain', icon: 'twemoji:flag-spain' },
			{ name: 'Intra lighting d.o.o.', country: 'Slovenia', icon: 'twemoji:flag-slovenia' },
			{ name: 'Lee Broom (Ireland) Ltd', country: 'Ireland', icon: 'twemoji:flag-ireland' },
			{ name: 'Ideal Lux S.r.l.', country: 'Italy', icon: 'twemoji:flag-italy' }
		]
	},
	{
		name: 'sound',
		icon: 'mdi:speaker',
		href: '/sound',
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
			{ name: 'Bose Products BV', country: 'Netherlands', icon: 'twemoji:flag-netherlands' },
			{ name: 'ATEЇS Europe B.V.', country: 'Netherlands', icon: 'twemoji:flag-netherlands' },
			{ name: 'Audio Tuning Vertriebs GmbH', country: 'Austria', icon: 'twemoji:flag-austria' },
			{ name: 'MUSIC & LIGHTS S.r.l.', country: 'Italy', icon: 'twemoji:flag-italy' },
			{ name: 'Cambridge Audio (EU) Limited', country: 'Ireland', icon: 'twemoji:flag-ireland' },
			{
				name: 'Transom Post Netherlands B.V.',
				country: 'Netherlands',
				icon: 'twemoji:flag-netherlands'
			},
			{ name: 'PVS N.V.', country: 'Belgium', icon: 'twemoji:flag-belgium' }
		]
	}
];

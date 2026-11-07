export interface App {
	slug: string;
	name: string;
	tagline: string;
	// Set once the app is live on the App Store.
	appStoreUrl?: string;
}

export const apps: App[] = [
	{
		slug: 'watch-setter',
		name: 'Watch Setter',
		tagline: 'Set a mechanical watch to the second.',
		// appStoreUrl: 'https://apps.apple.com/app/id6825334623',
	},
	{
		slug: 'string-setter',
		name: 'String Setter',
		tagline: 'Guitar tuner, peg by peg.',
		// appStoreUrl: 'https://apps.apple.com/app/id6828038013',
	},
	{
		slug: 'adding-calculator',
		name: 'Adding Calculator',
		tagline: 'Add up without losing track.',
		// appStoreUrl: 'https://apps.apple.com/app/id6829219563',
	},
	{
		slug: 'bare-page',
		name: 'Bare Page',
		tagline: 'Two taps to write it down.',
		// appStoreUrl: 'https://apps.apple.com/app/id6831972919',
	},
];

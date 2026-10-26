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
];

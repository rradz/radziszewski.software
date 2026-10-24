export interface App {
	slug: string;
	name: string;
	tagline: string;
	icon: string;
	// Set once the app is live on the App Store.
	appStoreUrl?: string;
}

export const apps: App[] = [
	{
		slug: 'watch-setter',
		name: 'Watch Setter',
		tagline: 'Set your mechanical watch to the second.',
		icon: '/apps/watch-setter/icon.png',
		// appStoreUrl: 'https://apps.apple.com/app/id6825334623',
	},
];

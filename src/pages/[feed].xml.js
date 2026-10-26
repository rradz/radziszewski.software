// The feed only exists once there is a published post.
import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getPosts } from '../lib/posts';

export async function getStaticPaths() {
	return (await getPosts()).length > 0 ? [{ params: { feed: 'rss' } }] : [];
}

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: site.name,
		description: site.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
		})),
	});
}

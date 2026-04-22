import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { pageBySlugQuery } from '$lib/sanity/queries';
import type { PageDocument } from '$lib/sanity/types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { sanity } = locals;
	const { data: page } = await sanity.loadQuery<PageDocument | null>(pageBySlugQuery, {
		slug: params.slug
	});

	if (!page) {
		error(404, 'Page not found');
	}

	return { page };
};

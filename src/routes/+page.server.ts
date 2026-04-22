import type { PageServerLoad } from './$types';
import { homeQuery } from '$lib/sanity/queries';
import type { Home } from '$lib/sanity/types';

export const load: PageServerLoad = async ({ locals }) => {
	const { sanity } = locals;
	const { data: home } = await sanity.loadQuery<Home | null>(homeQuery, {});
	return { home };
};

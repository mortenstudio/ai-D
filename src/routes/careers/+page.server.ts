import type { PageServerLoad } from './$types';
import { careersPageQuery } from '$lib/sanity/queries';
import type { CareersDocument } from '$lib/sanity/types';

export const load: PageServerLoad = async ({ locals }) => {
	const { sanity } = locals;
	const { data: careers } = await sanity.loadQuery<CareersDocument | null>(careersPageQuery, {});
	return { careers };
};

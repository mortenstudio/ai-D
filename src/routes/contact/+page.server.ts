import type { PageServerLoad } from './$types';
import { contactPageQuery } from '$lib/sanity/queries';
import type { ContactDocument } from '$lib/sanity/types';

export const load: PageServerLoad = async ({ locals }) => {
	const { sanity } = locals;
	const { data: contact } = await sanity.loadQuery<ContactDocument | null>(contactPageQuery, {});
	return { contact };
};

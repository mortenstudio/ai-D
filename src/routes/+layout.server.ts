import type { LayoutServerLoad } from './$types';
import { settingsQuery } from '$lib/sanity/queries';
import type { Settings } from '$lib/sanity/types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { sanity } = locals;
	const { data: settings } = await sanity.loadQuery<Settings | null>(settingsQuery, {});
	return {
		previewEnabled: sanity.previewEnabled,
		settings
	};
};

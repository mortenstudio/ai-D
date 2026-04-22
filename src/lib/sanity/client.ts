import { createClient } from '@sanity/sveltekit';

import { apiVersion, dataset, projectId, studioUrl } from './api';

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
	stega: {
		studioUrl
	}
});

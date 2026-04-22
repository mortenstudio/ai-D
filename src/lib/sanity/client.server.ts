import { env } from '$env/dynamic/private';

import { client } from './client';

const token = env.SANITY_API_READ_TOKEN;

/** Server-only client: token when present (drafts / preview), CDN off, stega for visual editing. */
export const serverClient = client.withConfig({
	...(token ? { token } : {}),
	useCdn: false,
	stega: true
});

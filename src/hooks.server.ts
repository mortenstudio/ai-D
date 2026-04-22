import { handleQueryLoader, setServerClient } from '@sanity/sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

import { serverClient } from '$lib/sanity/client.server';

setServerClient(serverClient);

export const handle = sequence(
	handleQueryLoader()
);

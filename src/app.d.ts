import type { ResolvedPathname } from '$app/types';
import type { SanityLocals } from '@sanity/sveltekit';
import type {
	Home,
	Settings,
	PageDocument,
	ContactDocument
} from '$lib/sanity/types';

declare global {
	namespace App {
		interface Locals extends SanityLocals {}
		interface PageData {
			settings?: Settings | null;
			home?: Home | null;
			page?: PageDocument | null;
			contact?: ContactDocument | null;
			meta?: {
				title?: string;
				description?: string;
			};
		}
	}
}

declare module '$app/paths' {
	export function resolve(
		path: '/preview/disable',
		options?: { redirect?: string }
	): ResolvedPathname;
}

export {};

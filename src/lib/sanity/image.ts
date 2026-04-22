import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

import { client } from './client';

const builder = createImageUrlBuilder(client);

/**
 * Build a Sanity image URL.
 *
 * Accepts any projection shape the image URL builder can consume — including
 * plain asset references (`{asset: {_ref}}`) and projections where the asset
 * has been resolved via `asset->` (as produced by the queries in `$lib/sanity/queries`).
 */
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}

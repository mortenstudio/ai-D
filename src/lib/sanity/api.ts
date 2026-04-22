import {
	PUBLIC_SANITY_API_VERSION,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_URL
} from '$env/static/public';

export function assertEnvVar<T>(value: T | undefined, name: string): T {
	if (value === undefined || value === '') {
		throw new Error(`Missing environment variable: ${name}`);
	}
	return value;
}

if (!PUBLIC_SANITY_PROJECT_ID) {
	throw new Error(
		'Missing PUBLIC_SANITY_PROJECT_ID. Copy frontend/.env.example to frontend/.env and set PUBLIC_SANITY_PROJECT_ID to the same value as SANITY_STUDIO_PROJECT_ID in studio/.env.'
	);
}

export const dataset = assertEnvVar(PUBLIC_SANITY_DATASET, 'PUBLIC_SANITY_DATASET');

export const projectId = PUBLIC_SANITY_PROJECT_ID;

export const apiVersion = PUBLIC_SANITY_API_VERSION || '2025-10-22';

export const studioUrl = PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333';

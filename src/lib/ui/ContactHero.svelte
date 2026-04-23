<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';
	import Link from '$lib/ui/Link.svelte';
	import { page } from '$app/state';
	import { urlFor } from '$lib/sanity/image';
	import type { Affiliation, Partnership } from '$lib/sanity/types';

	interface Props {
		partnership?: Partnership;
		affiliation?: Affiliation;
	}

	let { partnership, affiliation }: Props = $props();

	const settings = $derived(page.data.settings);
	const email = $derived(settings?.contactInformation?.email);
	const phone = $derived(settings?.contactInformation?.phone);
	const externalUrl = $derived(settings?.externalUrl);

	const partnershipTitle = $derived(partnership?.title ?? 'Are you a partner?');
	const affiliationTitle = $derived(affiliation?.title ?? 'A project by');
	const projectByEntries = $derived(affiliation?.projectBy ?? []);
	const hasSanityLogos = $derived(projectByEntries.some((entry) => entry.logo?.asset));
</script>

<section>
	<div class="mx-auto mb-30 grid max-w-[1920px] grid-cols-12 gap-8 px-4 pt-30 md:mb-40 md:pt-40 lg:mb-60 lg:gap-12 lg:pt-60">
		<div class="col-span-12">
			<div class="w-full h-8 bg-[url('/src/lib/assets/diagonal_squares_black.svg')] bg-center bg-repeat-x pointer-events-none"></div>
		</div>
		<div class="col-span-12 md:col-span-5">
			<Scramble
				text="About & contact"
				speed="slow"
				class="leading-tight font-bold text-3xl lg:text-4xl xl:text-5xl -translate-y-2"
			/>
		</div>
		<div class="col-span-12 md:col-span-7">
			<div class="flex flex-col gap-8 md:gap-12 lg:gap-16">
				<p class="md:text-md font-family-serif text-sm text-off-black lg:text-lg">
					aiD is headquartered at the Norwegian University of Science and Technology in Trondheim,
					Norway and at SINTEF, Norway.
				</p>
				<div class="flex flex-col gap-4">
					<div class="flex gap-2 md:gap-3">
						<div class="w-3.75 h-3.75 md:w-4.5 md:h-4.5 aspect-square rounded translate-y-1 md:translate-y-1.25 bg-off-black"></div>
						<Scramble text="Contact" speed="slow" class="text-md md:text-lg lg:text-xl font-bold text-off-black" />
					</div>
					<div class="flex flex-col">
						{#if email}
							<Link href={`mailto:${email}`} theme="light">
								{email}
							</Link>
						{/if}
						{#if phone}
							<Link href={`tel:${phone.replace(/\s+/g, '')}`} theme="light">
								{phone}
							</Link>
						{/if}
						{#if externalUrl?.url}
							<Link href={externalUrl.url} theme="light" border={true} trailing={true}>
								{externalUrl.label ?? externalUrl.url}
							</Link>
						{/if}
					</div>
				</div>
				{#if partnership?.label || partnership?.url}
					<div class="flex flex-col gap-4">
						<div class="flex gap-2 md:gap-3">
							<div class="w-3.75 h-3.75 md:w-4.5 md:h-4.5 aspect-square rounded translate-y-1 md:translate-y-1.25 bg-off-black"></div>
							<Scramble text={partnershipTitle} speed="slow" class="ftext-md md:text-lg lg:text-xl font-bold text-off-black" />
						</div>
						{#if partnership?.url}
							<Link
								href={partnership.url}
								theme="light"
								border={true}
								trailing={true}
								target="_blank"
							>
								{partnership.label ?? partnershipTitle}
							</Link>
						{/if}
					</div>
				{/if}
				<div class="flex flex-col gap-1">
					<div class="flex gap-2 md:gap-3">
						<div class="w-3.75 h-3.75 md:w-4.5 md:h-4.5 aspect-square rounded translate-y-1 md:translate-y-1.25 bg-off-black"></div>
						<Scramble text={affiliationTitle} speed="slow" class="text-md md:text-lg lg:text-xl font-bold text-off-black" />
					</div>
					<div class="mt-3 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
						{#if hasSanityLogos}
							{#each projectByEntries as entry, i (entry._key ?? i)}
								{#if entry.logo?.asset}
									<img
										src={urlFor(entry.logo).url()}
										alt={entry.label ?? ''}
										class=" h-8 w-auto object-contain md:h-10 lg:h-12"
										loading="lazy"
									/>
								{/if}
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import { gsap } from 'gsap';
	import { tick } from 'svelte';
	import Scramble from '$lib/actions/Scramble.svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { PartnerBucketEntry, PartnersBlockType } from '$lib/sanity/types';

	const { block }: { block: PartnersBlockType } = $props();

	const categories = [
		{ key: 'core', label: 'Core' },
		{ key: 'standard', label: 'Standard' },
		{ key: 'networking', label: 'Networking' }
	] as const;
	type CategoryKey = (typeof categories)[number]['key'];

	const partners = $derived(
		(block.partners ?? []).slice().sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''))
	);

	const counts = $derived({
		core: partners.filter((p) => p._type === 'core').length,
		standard: partners.filter((p) => p._type === 'standard').length,
		networking: partners.filter((p) => p._type === 'networking').length
	});

	const availableCategories = $derived(categories.filter((c) => counts[c.key] > 0));

	let activeCategory: CategoryKey = $state('core');
	let displayedPartners: PartnerBucketEntry[] = $state([]);
	let container: HTMLElement = $state()!;
	let initialized = false;

	$effect(() => {
		if (initialized) return;
		const first = availableCategories[0]?.key;
		if (!first) return;
		activeCategory = first;
		displayedPartners = partners.filter((p) => p._type === first);
		initialized = true;
	});

	async function switchCategory(category: CategoryKey) {
		if (category === activeCategory) return;
		activeCategory = category;

		const tiles = container?.querySelectorAll('.partner-tile');
		if (tiles?.length) {
			await gsap.to(tiles, { opacity: 0, duration: 0.15, ease: 'power2.in' });
		}

		displayedPartners = partners.filter((p) => p._type === category);
		await tick();

		const newTiles = container?.querySelectorAll('.partner-tile');
		if (newTiles?.length) {
			gsap.fromTo(
				newTiles,
				{ opacity: 0, y: 10 },
				{ opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.03 }
			);
		}
	}
</script>

<section>
	<div class="my-30 md:my-40 lg:my-60 mx-auto grid max-w-[1920px] grid-cols-12 gap-x-4 px-4 gap-y-8 lg:gap-y-12">
		<div class="col-span-12">
			<div class="flex flex-col gap-6">
				{#if block.title}
					<Scramble
						text={block.title}
						speed="slow"
						class="text-md font-bold text-off-black md:text-lg lg:text-xl"
					/>
				{/if}
			</div>
		</div>
		<div class="col-span-12">
			{#if availableCategories.length > 1}
				<div class="mb-4 flex flex-wrap gap-x-4 gap-y-2">
					{#each availableCategories as category (category.key)}
						<button
							class="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-xs md:text-base font-bold text-off-black whitespace-nowrap transition-colors duration-200 {activeCategory ===
							category.key
								? 'text-off-black'
								: 'text-grey'}"
							onclick={() => switchCategory(category.key)}
						>
							<div
								class="aspect-square size-3.5 rounded {activeCategory === category.key
									? 'bg-off-black'
									: 'border-2 border-grey'}"
							></div>
							{category.label} partners ({counts[category.key]})
						</button>
					{/each}
				</div>
			{/if}
			{#if displayedPartners.length}
				<div bind:this={container} class="flex flex-wrap gap-1">
					{#each displayedPartners as partner (partner._id)}
						<div class="partner-tile flex w-fit items-center rounded-lg lg:rounded-xl xl:rounded-2xl bg-white">
							{#if partner.logo}
								<img
									src={urlFor(partner.logo).url()}
									alt={partner.name ?? ''}
									class="w-auto h-20 lg:h-26 xl:h-32"
									loading="lazy"
								/>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
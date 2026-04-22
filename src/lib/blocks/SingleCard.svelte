<script lang="ts">
	import SectionLabel from '$lib/ui/SectionLabel.svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { SingleCardBlock } from '$lib/sanity/types';

	const { block }: { block: SingleCardBlock } = $props();

	const imageUrl = $derived(block.image?.asset ? urlFor(block.image).width(1600).auto('format').url() : null);
</script>

<section>
	<div
		class="grid grid-cols-12 gap-8 lg:gap-12 max-w-[1920px] px-4 mx-auto my-30 md:my-40 lg:my-60">
		{#if block.title}
			<div class="col-span-12 lg:col-span-2">
				<SectionLabel label={block.title} class="text-off-black dark:text-white transition-colors duration-800 ease-out-expo" />
			</div>
		{/if}
		<div class="col-span-12 lg:col-span-10 xl:col-span-9">
			<div class="flex flex-col items-center justify-center rounded-4xl py-12 md:py-16 lg:py-20 xl:py-24 px-8 md:px-20 lg:px-32 xl:px-40 gap-8 lg:gap-12 bg-white dark:bg-darker-grey transition-colors duration-800 ease-out-expo">
			{#if imageUrl}
				<figure class="overflow-hidden rounded-2xl">
					<img
						src={imageUrl}
						alt={block.image?.alt ?? block.title ?? ''}
						class="w-24 md:w-32 select-none"
						loading="lazy"
					/>
				</figure>
			{/if}
			{#if block.text}
				<p class="text-sm md:text-md lg:text-lg font-family-serif text-center text-off-black dark:text-white transition-colors duration-800 ease-out-expo">
					{block.text}
				</p>
			{/if}
			</div>
		</div>
	</div>
</section>

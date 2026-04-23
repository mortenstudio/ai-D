<script lang="ts">
	import roundsquareFrame from '$lib/assets/roundsquare_frame.svg';
	import Scramble from '$lib/actions/Scramble.svelte';
	import SectionLabel from '$lib/ui/SectionLabel.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { KeyNumbersBlock } from '$lib/sanity/types';

	const { block }: { block: KeyNumbersBlock } = $props();
</script>

<section>
	<div
		class="my-30 md:my-40 lg:my-60 mx-auto grid max-w-[1920px] grid-cols-12 gap-8 px-4 lg:gap-12"
	>
		{#if block.title}
			<div class="col-span-12 lg:col-span-2">
				<SectionLabel label={block.title} />
			</div>
		{/if}
		<div class="col-span-12 flex flex-col gap-8 lg:gap-12 xl:gap-16 lg:col-span-10">
			{#if block.keynumbers?.length}
				<div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
					{#each block.keynumbers as item (item._key)}
						<div class="flex items-center gap-3 md:gap-6 lg:gap-9">
							<div class="relative size-10 md:size-12 lg:size-16 min-w-fit">
								<img
									src={roundsquareFrame}
									alt=""
									class="h-full w-full"
								/>
								<div
									class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-off-black text-md md:text-lg lg:text-xl"
								>
									{item.number}
								</div>
							</div>
							<div class="flex items-center">
								<Scramble
									text={item.text}
									speed="slow"
									class="text-md md:text-lg lg:text-xl font-bold text-off-black leading-tight"
								/>
							</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if block.text?.length}
				<div class="md:columns-2 gap-4 md:gap-8 lg:gap-12 text-sm md:text-md lg:text-lg font-family-serif text-off-black [&_p:not(:last-child)]:mb-4">
					<PortableText value={block.text} />
				</div>
			{/if}
		</div>
	</div>
</section>

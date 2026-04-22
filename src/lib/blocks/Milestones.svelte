<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';
	import SectionLabel from '$lib/ui/SectionLabel.svelte';
	import type { MilestonesBlock } from '$lib/sanity/types';

	const { block }: { block: MilestonesBlock } = $props();
</script>

<section>
	<div
		class="my-30 md:my-40 lg:my-60 mx-auto grid max-w-[1920px] grid-cols-12 gap-8 px-4 lg:gap-12"
	>
		{#if block.title}
			<div class="col-span-12 lg:col-span-2">
				<SectionLabel label={block.title} class="text-off-black dark:text-white transition-colors duration-800 ease-out-expo" />
			</div>
		{/if}
		<div class="col-span-12 {block.title ? 'lg:col-span-10 xl:col-span-9' : ''}">
			<div class="flex flex-col gap-8 lg:gap-12 xl:gap-16">
				{#if block.text}
					<p class="text-sm md:text-md lg:text-lg font-family-serif text-off-black dark:text-white transition-colors duration-800 ease-out-expo">
						{block.text}
					</p>
				{/if}
				{#if block.milestones?.length}
					<div class="flex flex-col gap-4">
						<div class="text-sm lg:text-md font-bold text-greyed-out">Key milestones</div>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
							{#each block.milestones as item, i (i)}
								<div class="flex gap-2 md:gap-3">
									<div class="w-3.75 h-3.75 md:w-4.5 md:h-4.5 aspect-square rounded translate-y-1 md:translate-y-1.25 bg-off-black"></div>
									<Scramble
										text={item}
										speed="slow"
										class="text-md md:text-lg lg:text-xl font-bold text-off-black dark:text-white transition-colors duration-800 ease-out-expo" 
									/>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

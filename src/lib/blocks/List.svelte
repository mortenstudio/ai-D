<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';
	import SectionLabel from '$lib/ui/SectionLabel.svelte';
	import type { ListBlock } from '$lib/sanity/types';

	const { block }: { block: ListBlock } = $props();
</script>

<section>
	<div
		class="grid grid-cols-12 gap-8 lg:gap-12 max-w-[1920px] px-4 mx-auto my-30 md:my-40 lg:my-60"
	>
		{#if block.title}
			<div class="col-span-12 lg:col-span-2">
				<SectionLabel label={block.title} />
			</div>
		{/if}
		<div class="col-span-12 lg:col-span-10">
			<div class="flex flex-col gap-8 lg:gap-12 xl:gap-16">
				{#if block.headline}
					<h2 class="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight text-off-black dark:text-white transition-colors duration-800 ease-out-expo">
						{block.headline}
					</h2>
				{/if}
				{#if block.list?.length}
					<div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 gap-y-6 lg:gap-y-8">
						{#each block.list as item (item._key)}
							<div class="flex flex-col gap-2 md:gap-4">
								{#if item.title}
									<Scramble
										text={item.title}
										speed="slow"
										class="text-md md:text-lg lg:text-xl font-bold text-off-black dark:text-white transition-colors duration-800 ease-out-expo"
									/>
								{/if}
								{#if item.text}
									<p class="text-sm md:text-md lg:text-lg font-family-serif text-off-black dark:text-white transition-colors duration-800 ease-out-expo">
										{item.text}
									</p>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';
	import type { InvertedListBlock } from '$lib/sanity/types';

	const { block }: { block: InvertedListBlock } = $props();

	let sectionEl: HTMLElement | null = $state(null);

	$effect(() => {
		if (!sectionEl) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				document.documentElement.classList.toggle('dark', entry.isIntersecting);
			},
			{ rootMargin: '-50% 0px -50% 0px', threshold: 0 }
		);

		observer.observe(sectionEl);

		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionEl}>
	<div class="flex min-h-screen flex-wrap px-4 my-30 md:my-40 lg:my-60">
		<div
			class="sticky top-0 h-56 w-full pointer-events-none bg-linear-to-b from-light-grey via-light-grey dark:from-off-black dark:via-off-black dark:to-transparent transition-colors duration-800 ease-out-expo"
		>
			<div
				class="mt-32 h-8 invert dark:invert-0 bg-[url('/src/lib/assets/diagonal_squares_white.svg')] bg-size-auto bg-repeat-x pointer-events-none transition-colors duration-800 ease-out-expo"
			></div>
		</div>
		<div class="-mt-6 grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-12 max-w-[1920px] mx-auto">
			{#if block.headline}
				<div class="col-span-5">
					<h2
						class="sticky top-50 font-bold text-md md:text-lg lg:text-xl text-off-black dark:text-white transition-colors duration-800 ease-out-expo"
					>
						{block.headline}
					</h2>
				</div>
			{/if}
			{#if block.list?.length}
				<div class="col-span-4 {block.headline ? 'md:col-start-8' : ''}">
					<div class="flex flex-col gap-6 lg:gap-20 xl:gap-32 2xl:gap-40">
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
									<p
										class="text-sm md:text-md lg:text-lg font-family-serif text-off-black dark:text-white transition-colors duration-800 ease-out-expo"
									>
										{item.text}
									</p>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

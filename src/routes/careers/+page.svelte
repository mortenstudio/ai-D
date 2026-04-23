<script lang="ts">
	import Footer from '$lib/ui/Footer.svelte';
	import Header from '$lib/ui/Header.svelte';
	import Menu from '$lib/ui/Menu.svelte';
	import CareersOpenings from '$lib/careers/CareersOpenings.svelte';
	import type { PageData } from './$types';
	import Scramble from '$lib/actions/Scramble.svelte';

	let { data }: { data: PageData } = $props();
</script>

<Header />
<Menu />

<main>
	<div class="mx-auto grid max-w-[1920px] grid-cols-12 gap-8 lg:gap-12 px-4 pt-30 md:pt-40 lg:pt-60 mb-30 md:mb-40 lg:mb-60">
		<div class="col-span-12">
			<div class="w-full h-8 bg-[url('/src/lib/assets/diagonal_squares_black.svg')] bg-center bg-repeat-x pointer-events-none"></div>
		</div>
		<div class="col-span-12 md:col-span-5">
			<Scramble
				text="Careers"
				speed="slow"
				class="text-3xl leading-tight font-bold lg:text-4xl xl:text-5xl -translate-y-2"
			/>
		</div>
		<div class="col-span-12 md:col-span-7">
			<CareersOpenings openings={data.careers?.openings ?? []} />
		</div>
	</div>
</main>

<Footer />
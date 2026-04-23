<script lang="ts">
	import type { Opening } from '$lib/sanity/types';
	import CareersCard from './CareersCard.svelte';

	let { openings = [] }: { openings?: Opening[] } = $props();
</script>

{#if openings.length}
	<div class="flex flex-col gap-3">
		{#each openings as opening (opening._id)}
			<CareersCard {opening} />
		{/each}
	</div>
{/if}

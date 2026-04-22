<script lang="ts">
	import type { ContactBlock } from '$lib/sanity/types';
	import EmployeesBlock from './EmployeesBlock.svelte';
	import PartnersBlock from './PartnersBlock.svelte';

	const { blocks }: { blocks: ContactBlock[] } = $props();
</script>

{#each blocks as block (block._key)}
	{#if block._type === 'employees'}
		<EmployeesBlock {block} />
	{:else if block._type === 'partners'}
		<PartnersBlock {block} />
	{/if}
{/each}

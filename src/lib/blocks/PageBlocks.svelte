<script lang="ts">
	import type { PageBlock } from '$lib/sanity/types';
	import SingleCard from './SingleCard.svelte';
	import Milestones from './Milestones.svelte';
	import KeyNumbers from './KeyNumbers.svelte';
	import List from './List.svelte';
	import InvertedList from './InvertedList.svelte';

	const { blocks }: { blocks: PageBlock[] } = $props();
</script>

{#each blocks as block (block._key)}
	{#if block._type === 'singlecard'}
		<SingleCard {block} />
	{:else if block._type === 'milestones'}
		<Milestones {block} />
	{:else if block._type === 'keynumbers'}
		<KeyNumbers {block} />
	{:else if block._type === 'list'}
		<List {block} />
	{:else if block._type === 'invertedList'}
		<InvertedList {block} />
	{/if}
{/each}

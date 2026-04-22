<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import Menu from '$lib/ui/Menu.svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import ContactHero from '$lib/ui/ContactHero.svelte';
	import ContactBlocks from '$lib/blocks/ContactBlocks.svelte';
	import { page as pageState } from '$app/state';

	const contact = $derived(pageState.data.contact);
	const hasBlocks = $derived((contact?.contentBlocks?.length ?? 0) > 0);
</script>

<Header />
<Menu />

<main>
	<ContactHero partnership={contact?.partnership} affiliation={contact?.affiliation} />
	{#if hasBlocks && contact?.contentBlocks}
		<ContactBlocks blocks={contact.contentBlocks} />
	{/if}
</main>

<Footer />
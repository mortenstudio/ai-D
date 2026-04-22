<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import Menu from '$lib/ui/Menu.svelte';
	import SearchBar from '$lib/ui/SearchBar.svelte';
	import NodeSphere from '$lib/ui/NodeSphere.svelte';
	import { menuOpen } from '$lib/stores/menu';
	import HomeText from '$lib/ui/HomeText.svelte';
	import { page } from '$app/state';

	const home = $derived(page.data.home);
</script>

<div class="fixed inset-0 -mt-24">
	<NodeSphere paused={$menuOpen} />
</div>

<Header />
<Menu />

<main>
	<SearchBar />
	<HomeText description={home?.description ?? ''} />
</main>

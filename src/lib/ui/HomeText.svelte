<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';

	const { description }: { description: string } = $props();
</script>

<div class="absolute bottom-4 left-4 right-4 max-w-250">
	<h1 class="font-bold text-off-black text-md md:text-lg lg:text-xl xl:text-2xl leading-tight">
		<Scramble text={description} speed="fast" />
	</h1>
</div>

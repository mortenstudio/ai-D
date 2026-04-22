<script lang="ts">
	import Scramble from '$lib/actions/Scramble.svelte';
	import EmployeeCard from '$lib/ui/EmployeeCard.svelte';
	import { urlFor } from '$lib/sanity/image';
	import type { Employee, EmployeesBlockType } from '$lib/sanity/types';

	const { block }: { block: EmployeesBlockType } = $props();

	const employees = $derived((block.employees ?? []).filter((e): e is Employee => !!e));

</script>

<section>
	<div class="my-30 md:my-40 lg:my-60 mx-auto grid max-w-[1920px] grid-cols-12 gap-x-4 px-4 gap-y-8 lg:gap-y-12">
		{#if block.title}
			<div class="col-span-12">
				<Scramble
					text={block.title}
					speed="slow"
					class="text-md md:text-lg lg:text-xl font-bold text-off-black"
				/>
			</div>
		{/if}
		{#if employees.length}
			{#each employees as employee (employee._id)}
				<div class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
					<EmployeeCard {employee} />
				</div>
			{/each}
		{/if}
	</div>
</section>

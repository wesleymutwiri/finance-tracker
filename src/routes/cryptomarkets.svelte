<script>
	import Table from '$lib/Utilities/Table.svelte';
	import { currency } from '../stores/crypto.js';
	// $: console.log(currency);
	// $: console.log($currency)
</script>

<h1>Current crypto markets</h1>

<!-- <Table tableData={$currency} /> -->
{#if $currency}
	<div class="table-data">
		{#each $currency as data, i}
			<p class="market-name">
				<span class="name">
					{data.name}:
				</span>
				${data.current_price}
			</p>
		{/each}
	</div>
{/if}

<style>
	.table-data {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.name {
		font-weight: 900;
		font-size: 1.2rem;
	}
</style>

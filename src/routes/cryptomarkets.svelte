<script>
    import Table from "$lib/Utilities/Table.svelte";
    import { currency } from "../stores/crypto.js";
    // $: console.log(currency);
    // $: console.log($currency)
</script>
<h1>
    Current crypto markets
</h1>

<!-- <Table tableData={$currency} /> -->
{#if $currency}
	{#each $currency as data, i}
		<p>
			<span class="market-name">
				{data.name}:
			</span>
			${data.current_price}
		</p>
	{/each}
{/if}

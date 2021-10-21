<script>
	import Table from '$lib/Utilities/Table.svelte';
	import { currency } from '../stores/crypto.js';
	import { formatNumber } from '../utils/utils';
	// $: console.log(currency);
	// $: console.log($currency)

</script>

<h1>Current crypto markets</h1>

<!-- <Table tableData={$currency} /> -->
{#if $currency}
	<!-- <div class="table-data">
		{#each $currency as data, i}
			<p class="market-name">
				<span class="name">
					{data.name}:
				</span>
				${data.current_price}
			</p>
		{/each}
	</div> -->
	<table>
		<thead>
			<tr>
				<th>No</th>
				<th>Name</th>
				<th>Current Price</th>
				<th>ATH Percentage Change</th>
				<th>24H Price Percentage Change</th>
				<th>Market Cap</th>
			</tr>
		</thead>
		<tbody>
			{#each $currency as data, i}
				<tr>
					<td>{i + 1}</td>
					<td class="data-row"><img class="small-image" src={data.image} alt={data.name} /> {data.name}</td>
					<td>{formatNumber(data.current_price)}</td>
					<td>{data.ath_change_percentage}</td>
					<td>{data.price_change_percentage_24h}</td>
					<td>{formatNumber(data.market_cap)}</td>

				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	Data could not be loaded
{/if}

<style>
	/* .table-data {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.name {
		font-weight: 900;
		font-size: 1.2rem;
	} */
	.small-image {
		height: 30px;
		width: 30px;
		margin-right: 0.5rem;
	}
	.data-row {
		display: flex;
		align-content: center;
	}
	th {
		text-align: left;
		font-size: 1.1rem;
		cursor: pointer;
	}
	td {
		padding: 1rem 0;
	}
</style>

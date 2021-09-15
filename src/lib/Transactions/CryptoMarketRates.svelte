<script>
	import { onMount } from 'svelte';

	let accountData;

	onMount(async function () {
		let calling = await fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
		);
		let p = await calling.json();
		console.log(p);
		accountData = p;
	});
	// fetch(
	// 	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
	// ).then((response) => {
	// 	// response.json();
	// 	// console.log(response.json());
	//     accountData = response.json()["data"]
	// });
</script>
<div class="market-rates">

{#if accountData}
	{#each accountData as data, i}
		<p>
			<span class="market-name">
				{data.id}: 
			</span>
			${data.current_price}
		</p>
	{/each}
{/if}
</div>

<style>
    .market-rates {
        height: 170px;
        overflow-y: scroll;
    }

	.market-name {
		font-weight: 600;
		text-transform: capitalize;
		font-size: 1.2rem;
	}
</style>
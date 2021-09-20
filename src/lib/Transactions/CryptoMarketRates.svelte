<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	let accountData = [];

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
	let currency = accountData.forEach((account) => {
		(({ current_price, name, ath_change_percentage, image }) => ({
			name,
			ath_change_percentage,
			image,
			current_price
		}))(account);
	});
	console.log('Currency', currency);
	// export let currencyData = writable(currency);
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

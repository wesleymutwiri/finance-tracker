<script>
	import { currency } from '../../stores/crypto.js';
</script>

<div class="market-rates">
	{#if $currency}
		{#each $currency as data, i}
			<div class="crypto-details">
				<span class="market-name bold">
					{data.name}:
				</span>
				<span class="price">
					${data.current_price}
				</span>
				<span class="percentage-change" />
			</div>
		{/each}
	{/if}
</div>

<style>
	.market-rates {
		height: 200px;
		overflow-y: scroll;
		width: 400px;
	}

	.market-name {
		font-weight: 600;
		text-transform: capitalize;
		font-size: 1.2rem;
		grid-area: name;
		margin-bottom: 1rem;
	}
	.percentage-change {
		background: #00b0e8;
		width: 90%;
		height: 2px;
		grid-area: percentage;
	}
	.crypto-details {
		padding: 1rem 0;
		display: grid;
		grid-template-areas:
			'name name price'
			'percentage percentage percentage';
	}

	.price {
		grid-area: price;
	}
</style>

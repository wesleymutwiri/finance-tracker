<script>
	export let title, price, date;
</script>

<div class="transaction-container">
	<div class="transaction-title">
		<h2>{title}</h2>
	</div>
	<div class="transaction-amount">
		<p class:positive={price > 0}>
			{price} KSH
		</p>
	</div>
	<div class="transaction-date">
		{date}
	</div>
</div>

<style>
	.transaction-container {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		align-items: center;
		width: 800px;
		gap: 1rem;
	}
	p {
		color: #fc8800;
	}

	.positive {
		color: #00b0e8;
	}
</style>

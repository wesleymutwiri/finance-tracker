<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import TinyCard from '$lib/Card/TinyCard.svelte';
	import Card from '$lib/Card/Card.svelte';
	import TransactionItem from '$lib/Transactions/TransactionItem.svelte';
	import CryptoMarketRates from '$lib/Transactions/CryptoMarketRates.svelte';
	import Navbar from '$lib/Navbar.svelte';

	let portfolio;
	let profitgraph;
	onMount(() => {
		// Chart.legend.labels.usePointStyle = true;
		const data = {
			labels: ['Expenses', 'Savings', 'Investments'],
			datasets: [
				{
					label: 'My First Dataset',
					data: [300, 50, 100],
					backgroundColor: ['#7000e1', '#fc8800', '#00b0e8'],
					// hoverOffset: 4,
					borderWidth: 0
				}
			]
		};
		const config = {
			type: 'doughnut',
			data: data,
			options: {
				borderRadius: '30',
				responsive: true,
				cutout: '95%',
				spacing: 2,
				plugins: {
					legend: {
						position: 'bottom',
						display: true,
						labels: {
							usePointStyle: true,
							padding: 20,
							font: {
								size: 14
							}
						}
					},
					title: {
						display: true,
						text: 'My Personal Portfolio'
					}
				}
			}
		};
		const ctx = portfolio.getContext('2d');
		const profitCtx = profitgraph.getContext('2d');
		const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
		const profitData = {
			labels: labels,
			datasets: [
				{
					label: 'My First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					fill: true,
					borderColor: '#7000e1',
					tension: 0.5,
					pointRadius: 0,
					backgroundColor: '#7000e120'
				}
			]
		};
		const profitConfig = {
			type: 'line',
			data: profitData,
			options: {
				responsive: true,
				scales: {
					x: {
						grid: {
							display: false
						}
					}
				}
			}
		};
		var myChart = new Chart(ctx, config);
		var profitChart = new Chart(profitCtx, profitConfig);
	});
</script>
<Navbar />

<div class="row">
	<TinyCard
		name="Expenses"
		price="30000"
		percentage="-20%"
		backgroundfrom="#7000e1"
		backgroundto="#9d4afb"
	/>
	<TinyCard
		name="Investments"
		price="10000"
		percentage="+5%"
		backgroundfrom="#00b0e8"
		backgroundto="#3dcaf8"
	/>
	<TinyCard
		name="Savings"
		price="5000"
		percentage="-1%"
		backgroundfrom="#fc8800"
		backgroundto="#fab12f"
	/>
	<TinyCard
		name="Crypto"
		price="5000"
		percentage="-1%"
		backgroundfrom="#d81159"
		backgroundto="#ff4d6d"
	/>
</div>
<div class="row">
	<Card>
		<span slot="card-header">
			<div class="row">
				<h3>Total profit (KSH)</h3>
			</div>
		</span>
		<span slot="card-body">
			<canvas bind:this={profitgraph} width={800} height={400} />
		</span>
	</Card>
	<Card>
		<span slot="card-header">
			<h3>Money Portfolio</h3>
		</span>
		<span slot="card-body">
			<canvas bind:this={portfolio} width={400} height={400} />
		</span>
	</Card>
</div>

<div class="row">
	<Card>
		<span slot="card-header">
			<h3>Latest transactions</h3>
		</span>
		<span slot="card-body">
			<TransactionItem
				title="Payment to insurance company"
				price="-337.99"
				date="29 Jun at 10:12"
			/>
			<TransactionItem title="Profit from trading crypto" price="1024.45" date="27 Jun at 18:34" />
			<TransactionItem
				title="Profit from Selling of stocks"
				price="13000.45"
				date="25 Jun at 09:34"
			/>
		</span>
	</Card>
	<Card>
		<span slot="card-header">
			<h3>Current Market Rates</h3>
		</span>
		<span slot="card-body">
			<CryptoMarketRates />
		</span>
	</Card>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
	}

</style>

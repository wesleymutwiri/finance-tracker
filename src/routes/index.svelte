<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import TinyCard from '$lib/Card/TinyCard.svelte';
	import Card from '$lib/Card/Card.svelte';
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
					borderWidth: 0,
				}
			]
		};
		const config = {
			type: 'doughnut',
			data: data,
			options: {
				borderRadius: '30',
				responsive: true,
				cutout: '90%',
				spacing: 2,
				plugins: {
					legend: {
						position: 'top',
						display: true,
						labels: {
							usePointStyle: true
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
					// fill: false,
					borderColor: '#7000e1',
					tension: 0.5,
					pointRadius: 0,
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

<div class="row space-between">
	<div class="search">
		<input type="search" name="search" id="search" placeholder="Search" />
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="css-i6dzq1"
			><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
		>
	</div>
	<div class="icons">
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="css-i6dzq1"
			><polygon
				points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
			/></svg
		>
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="css-i6dzq1"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg
		>
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="css-i6dzq1"
			><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
				cx="18"
				cy="19"
				r="3"
			/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line
				x1="15.41"
				y1="6.51"
				x2="8.59"
				y2="10.49"
			/></svg
		>
		<div class="row">
			<div class="avatar">
				<img src="https://i.pravatar.cc/300" alt="" />
			</div>
			Wesley Mutwiri
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"><polyline points="6 9 12 15 18 9" /></svg
			>
		</div>
	</div>
</div>
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
<h1>This is a heading</h1>
<p>This is text</p>
<div class="row">
	<Card>
		<span slot="card-header">
			<div class="row">
				<h2>Total profit (KSH)</h2>
			</div>
		</span>
		<span slot="card-body">
			<canvas bind:this={profitgraph} width={800} height={400} />
		</span>
	</Card>
	<Card>
		<span slot="card-header">
			<h2>Money Portfolio</h2>
		</span>
		<span slot="card-body">
			<canvas bind:this={portfolio} width={400} height={400} />
		</span>
	</Card>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
	}
	.search {
		position: relative;
		margin-bottom: 3rem;
		margin-top: 2rem;
	}

	.search input {
		padding: 1rem 1rem;
		padding-left: 3.2rem;
		border: none;
		/* background: #fff; */
		border-radius: 2rem;
	}
	.search svg {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}
	/* .search:not(input:placeholder-shown) ~ svg {
		display: none;
	} */
	.avatar img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
	.space-between {
		justify-content: space-between;
		width: 100%;
	}
	.icons {
		display: flex;
		align-items: center;
	}
	.icons svg {
		margin: 1rem;
	}
</style>

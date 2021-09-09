<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	let canvas;

	onMount(() => {
		// Chart.legend.labels.usePointStyle = true;
		const data = {
			labels: [
				'Expenses',
				'Savings',
				'Investments'
			],
			datasets: [{
				label: 'My First Dataset',
				data: [300, 50, 100],
				backgroundColor: [
					'#7000e1',
					'#fc8800',
					'#00b0e8'
				],
				// hoverOffset: 4,
				// borderWidth: 1
			}]
		};
		const config = {
			type: 'doughnut',
			data: data,
			options: {
				responsive: true,
				cutout: "95%",
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
						text: 'Chart.js Doughnut Chart'
					}
				}
			},
		};
		const ctx = canvas.getContext('2d');
		var myChart = new Chart(ctx, config)
	})
</script>
<h1>This is a heading</h1>
<p>This is text</p>
<canvas bind:this={canvas} width={32} height={32}></canvas>
<script lang="ts">
	import Card from '$lib/Card/Card.svelte';

	import Modal from '$lib/Utilities/Modal.svelte';
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	let showExpenseModal = false;
	let showCategoryModal = false;
	let expenseChart;
	let selected;

	let categories = [
		{ id: 1, text: `Groceries` },
		{ id: 2, text: `Electricity` },
		{ id: 3, text: `Rent` },
		{ id: 4, text: `Transport` },
		{ id: 4, text: `Internet` }
	];
	onMount(() => {
		const data = {
			labels: ['Rent', 'Food', 'Internet', 'Transport', 'Electricity'],
			datasets: [
				{
					label: 'My First Dataset',
					data: [16000, 8000, 2500, 6000, 1500],
					backgroundColor: ['#7000e1', '#fc8800', '#00b0e8', '#ff4d6d', '#39ff14'],
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
				cutout: '98%',
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
						text: 'Monthly Expenses'
					}
				}
			}
		};
		const ctx = expenseChart.getContext('2d');
		var expenseGraph = new Chart(ctx, config);
	});
</script>

<h1>Budget page</h1>
<div class="row">
	<button on:click={() => (showExpenseModal = true)}>+ New Expense</button>
	<button on:click={() => (showCategoryModal = true)}>+ New Category</button>

	{#if showExpenseModal}
		<Modal on:close={() => (showExpenseModal = false)}>
			<div slot="modal-header">
				<h1>Add New Expense</h1>
			</div>
			<div slot="modal-body">
				<input type="text" placeholder="Expense name" />
				<select name="category" id="" value={selected} on:change={() => answer}>
					{#each categories as category}
						<option value={category}>
							{category.text}
						</option>
					{/each}
				</select>
				<input type="number" placeholder="Price" />
			</div>
			<div slot="modal-buttons">
				<button class="secondary-button" on:click={() => (showExpenseModal = false)}>close</button>
				<button>Submit</button>
			</div>
		</Modal>
	{/if}

	{#if showCategoryModal}
		<Modal on:close={() => (showCategoryModal = false)}>
			<div slot="modal-header">
				<h1>New Expense Category</h1>
			</div>
			<div slot="modal-body">
				<input type="text" placeholder="Category name" />
			</div>
			<div slot="modal-buttons">
				<button class="secondary-button" on:click={() => (showCategoryModal = false)}>close</button>
				<button>Submit</button>
			</div>
		</Modal>
	{/if}
</div>

<div class="row">
	<Card>
		<span slot="card-header">
			<div class="row">
				<h3>Budget Expense (KSH)</h3>
			</div>
		</span>
		<span slot="card-body">
			<canvas bind:this={expenseChart} width={500} height={300} />
		</span>
	</Card>
</div>

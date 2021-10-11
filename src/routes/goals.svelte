<script lang="ts">
	import Modal from '$lib/Utilities/Modal.svelte';
	let showModal = false;
	let goalName, goalDescription, targetPrice;
	type Goal = {
		uid: string;
		created_at: Date;
		name: string;
		description: string;
		is_completed: boolean;
		priceTarget: number;
		currentPrice: number;
		targetDate: Date;
	};

	export let goals: Goal[];
</script>

<h1>My goals</h1>
<button on:click={() => (showModal = true)}>Add Goal</button>
{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<div slot="modal-header">
			<h1>Add New Goal</h1>
		</div>
		<div slot="modal-body">
			<form action="">
				<input type="text" name="goalName" id="" placeholder="Name of Goal" bind:value={goalName} />
				<textarea
					name="goalDescription"
					id=""
					cols="30"
					rows="10"
					placeholder="details about the goal"
					bind:value={goalDescription}
				/>
				<input
					type="number"
					name="price"
					id=""
					placeholder="Price required"
					bind:value={targetPrice}
				/>
				button
			</form>
		</div>
	</Modal>
{/if}

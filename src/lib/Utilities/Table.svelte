<script>
	export let tableData = [
		{
			vitae: 'dolorem',
			lectus: 'ipsum',
			quisquam: 'quia'
		},
		{
			vitae: 'amet',
			lectus: 'consectetur',
			quisquam: 'adipisci'
		}
	];
</script>

<table>
	<thead>
		<tr>
			{#each Object.keys(tableData[0]) as columnHeading}
				<th>{columnHeading}</th>
			{/each}
			{#if $$slots.progress}
				<th>Progress</th>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each Object.values(tableData) as row}
			<tr>
				{#each Object.values(row) as cell}
					<td>{cell}</td>
				{/each}
				<td>
					<slot name="progress" />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
</style>

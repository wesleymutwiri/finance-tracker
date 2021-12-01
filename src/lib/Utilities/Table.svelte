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
			<th>#</th>
			{#each Object.keys(tableData[0]) as columnHeading}
				<th>{columnHeading}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.values(tableData) as row}
			<tr>
				<td />
				{#each Object.values(row) as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		counter-reset: some-rows -1;
	}

	table tr {
		counter-increment: some-rows 1;
	}

	table tr td:first-child::before {
		content: counter(some-rows);
	}

	td {
		max-width: 150px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>

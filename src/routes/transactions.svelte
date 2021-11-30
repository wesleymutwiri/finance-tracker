<script context="module">
	export async function load({ fetch }) {
		const url = 'http://localhost:5000/transactions';
		const res = await fetch(url, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'content-type': 'application/json'
			}
		});

		if (res.ok) {
			return {
				props: {
					sections: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Table from '$lib/Utilities/Table.svelte';
	export let sections = [];
</script>

<h1>Transactions</h1>
{#if sections}
	<Table tableData={sections} />
{/if}

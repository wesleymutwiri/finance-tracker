<script lang="ts">
	// import Header from '$lib/header/Header.svelte';
	import { onMount } from 'svelte';
	import { theme } from '../stores/theme.store';
	import { writable } from 'svelte/store';

	// const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
	// const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	// const theme = writable(prefersDarkMode.matches ? 'dark' : 'light');
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->
<div class="container">
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		display: flex;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		/* margin-left: 300px; */
		box-sizing: border-box;
	}

	.dark {
		background: var(--dark-background);
	}
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

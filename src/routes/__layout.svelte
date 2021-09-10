<script lang="ts">
	// import Header from '$lib/header/Header.svelte';
	// import {onMount} from 'svelte';
	// import { theme } from '../stores/theme.store';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte'
	import '../app.css';
</script>

<!-- <Header /> -->
<Sidebar />
<main class="dark:dark light">
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
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

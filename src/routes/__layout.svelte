<script lang="ts">
	// import Header from '$lib/header/Header.svelte';
	// import {onMount} from 'svelte';
	// import { theme } from '../stores/theme.store';
	import '../app.css';
</script>

<!-- <Header /> -->

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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
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

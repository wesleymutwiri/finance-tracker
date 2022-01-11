<script lang="ts">
	// import Header from '$lib/header/Header.svelte';
	import Sidebar from '$lib/Sidebar/Sidebar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	
	const STORAGE_KEY = 'theme';

	const prefersDarkThemes = () => window.matchMedia('(prefers-color-scheme: dark)');
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		let currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;
		// currentTheme = localStorage.getItem(STORAGE_KEY) ??
		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	};
	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	})
	// const theme = writable(prefersDarkMode.matches ? 'dark' : 'light');
</script>

<!-- <Header /> -->
<div class="container">
	<Sidebar on:click={toggleTheme}/>
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

</style>

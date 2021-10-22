<div class="sidebar-container">
	<div class="logo">
		<h1>Wesley</h1>
	</div>
	<div class="links">
		<a href="/" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"
				><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
					points="9 22 9 12 15 12 15 22"
				/></svg
			>
			Home
		</a>
		<a href="#" class="iconed-link problematic">
			<svg
				height="24"
				viewBox="0 0 512 512"
				width="24"
				stroke="none"
				stroke-width="2"
				fill="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="m200 0h-160c-22.056 0-40 17.944-40 40v224c0 22.056 17.944 40 40 40h160c22.056 0 40-17.944 40-40v-224c0-22.056-17.944-40-40-40zm24 264c0 13.233-10.766 24-24 24h-160c-13.234 0-24-10.767-24-24v-224c0-13.233 10.766-24 24-24h160c13.234 0 24 10.767 24 24z"
				/><path
					d="m200 336h-160c-22.056 0-40 17.944-40 40v96c0 22.056 17.944 40 40 40h160c22.056 0 40-17.944 40-40v-96c0-22.056-17.944-40-40-40zm24 136c0 13.233-10.766 24-24 24h-160c-13.234 0-24-10.767-24-24v-96c0-13.233 10.766-24 24-24h160c13.234 0 24 10.767 24 24z"
				/><path
					d="m512 472v-224c0-22.056-17.944-40-40-40h-160c-22.056 0-40 17.944-40 40v224c0 22.056 17.944 40 40 40h160c22.056 0 40-17.944 40-40zm-16 0c0 13.233-10.766 24-24 24h-160c-13.234 0-24-10.767-24-24v-224c0-13.233 10.766-24 24-24h160c13.234 0 24 10.767 24 24z"
				/><path
					d="m512 136v-96c0-22.056-17.944-40-40-40h-160c-22.056 0-40 17.944-40 40v96c0 22.056 17.944 40 40 40h160c22.056 0 40-17.944 40-40zm-16 0c0 13.233-10.766 24-24 24h-160c-13.234 0-24-10.767-24-24v-96c0-13.233 10.766-24 24-24h160c13.234 0 24 10.767 24 24z"
				/></svg
			>
			Dashboard
		</a>
		<a href="#" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"
				><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline
					points="14 2 14 8 20 8"
				/><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline
					points="10 9 9 9 8 9"
				/></svg
			>
			Documents
		</a>
		<a href="/statistics" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="bordered"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg
			>
			Statistics
		</a>
		<a href="/goals" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"
				><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle
					cx="12"
					cy="12"
					r="2"
				/></svg
			>

			Goals
		</a>
		<a href="/budget" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"
				><line x1="12" y1="1" x2="12" y2="23" /><path
					d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
				/></svg
			>
			Budget
		</a>
		<a href="/calendar" class="iconed-link">
			<svg
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="css-i6dzq1"
				><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line
					x1="16"
					y1="2"
					x2="16"
					y2="6"
				/><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg
			>
			Calendar
		</a>
	</div>

	<div class="toggle-button">
		<button on:click>Change theme</button>
	</div>
</div>

<style>
	.sidebar-container {
		display: flex;
		flex-direction: column;
		position: sticky;
		padding: 2rem;
		/* background: #ffffff; */
		height: 100vh;
		top: 0;
		min-width: 300px;
		align-items: center;
	}

	.links {
		display: flex;
		flex-direction: column;
	}
	.iconed-link {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}
	.iconed-link svg {
		margin-right: 0.5rem;
	}
	.bordered {
		border: 1px solid currentColor;
		border-radius: 4px;
	}
	a:hover .bordered {
		border: 1px solid #7000e1;
	}
	a:hover svg {
		stroke: #7000e1;
	}

	.problematic:hover svg {
		fill: #7000e1;
	}
</style>

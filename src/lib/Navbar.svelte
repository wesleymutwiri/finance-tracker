<script>
	let profileDetailsOpen = false;
</script>

<div class="row space-between">
	<div class="search">
		<input type="search" name="search" id="search" placeholder="Search" />
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
			><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
		>
	</div>
	<div class="icons">
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
			><polygon
				points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
			/></svg
		>
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="css-i6dzq1"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg
		>
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
			><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
				cx="18"
				cy="19"
				r="3"
			/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line
				x1="15.41"
				y1="6.51"
				x2="8.59"
				y2="10.49"
			/></svg
		>
		<div class="profile-toggle" on:click={() => (profileDetailsOpen = !profileDetailsOpen)}>
			<div class="row">
				<div class="avatar">
					<img src="https://i.pravatar.cc/300" alt="" />
				</div>
				Wesley Mutwiri
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
				>
					<polyline points="6 9 12 15 18 9" /></svg
				>
			</div>
			{#if profileDetailsOpen}
				<ol class="sub-menu" class:profileDetailsOpen>
					<a href="#">Profile</a>
				</ol>
			{/if}
		</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
	}

	.search {
		position: relative;
		margin-bottom: 3rem;
		margin-top: 2rem;
	}

	.search input {
		padding: 1rem 1rem;
		padding-left: 3.2rem;
		border: none;
		/* background: #fff; */
		border-radius: 2rem;
	}
	.search svg {
		position: absolute;
		top: 1.5rem;
		left: 1rem;
	}
	/* .search:not(input:placeholder-shown) ~ svg {
		display: none;
	} */

	.avatar {
		margin: 0 1rem 0 3rem;
		position: relative;
	}

	.avatar img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}
	.space-between {
		justify-content: space-between;
		width: 100%;
	}
	.icons {
		display: flex;
		align-items: center;
	}
	.icons svg {
		margin: 1rem;
	}

	.profile-toggle {
		cursor: pointer;
		position: relative;
		width: max-content;
		height: max-content;
		display: flex;
		flex-direction: column;
	}
	.sub-menu {
		visibility: hidden; /* hides sub-menu */
		opacity: 0;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		transform: translateY(-2em);
		z-index: -1;
		transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
	}
	.profileDetailsOpen {
		visibility: visible; /* shows sub-menu */
		opacity: 1;
		z-index: 1;
		transform: translateY(0%);
		transition-delay: 0s, 0s, 0.3s;
		background: #fff;
		margin: 0 auto;
		display: block;
		width: calc(100% - 20px);
	}
</style>

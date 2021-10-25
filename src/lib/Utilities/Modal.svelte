<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;
	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);

			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;
	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<div id="background" on:click={close} />
<div class="modal-container" role="dialog" aria-modal="true" bind:this={modal}>
	<div class="modal-header">
		<slot name="modal-header">some modal</slot>
	</div>
	<div class="modal-body">
		<slot name="modal-body">some modal</slot>
	</div>
	<div class="modal-buttons">
		<slot name="modal-buttons">Some buttons here</slot>
	</div>
</div>

<style>
	#background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}
	.modal-container {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%, -50%);
		padding: 1rem 2rem;
		border-radius: 1.5rem;
	}

	.modal-buttons {
		display: flex;
		justify-content: end;
		margin: 1rem 0;
	}
</style>
